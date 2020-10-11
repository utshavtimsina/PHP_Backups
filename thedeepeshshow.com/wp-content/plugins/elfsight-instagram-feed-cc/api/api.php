<?php

namespace ElfsightInstagramFeedApi;


if (!defined('ABSPATH')) exit;

require_once __DIR__ . '/vendor/autoload.php';

class Api extends Core\Api {
    private $routes = array(
        '/media/shortcode/{shortcode}' => 'shortcode',
        '/users/{username}/media/recent' => 'userMedia',
        '/users/{username}' => 'user',
        '/tags/{tag}/media/recent' => 'tagMedia',
        '/locations/{tag}/media/recent' => 'locationMedia'
    );

    public $path;

    public $limit;
    public $count;
    public $maxId;

    public $cacheKey;

    public $rhxGis;
    public $csrfToken;

    public $Format;
    public $Endpoint;

    public $metaInfo = array();

    public static $ERROR_PARSE;
    public static $ERROR_EMPTY_PAGE;
    public static $ERROR_EMPTY_TREE;

    const DEBUG_MODE = false;

    public function __construct($config) {
        self::$ERROR_PARSE = __('Document parse error');
        self::$ERROR_EMPTY_PAGE = __('Empty page data');
        self::$ERROR_EMPTY_TREE = __('Empty entry tree data');

        $config['debug_mode'] = self::DEBUG_MODE;

        parent::__construct($config, $this->routes);

        self::$client = array(
            'base_url' => 'https://www.instagram.com',
            'headers' => array(
                'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36',
                'Origin' => 'https://www.instagram.com',
                'Referer' => 'https://www.instagram.com',
                'Connection' => 'close'
            ),
            'cookies' => array(
                'ig_or' => 'landscape-primary',
                'ig_pr' => '1',
                'ig_vh' => 1080,
                'ig_vw' => 1920,
                'ds_user_id' => 25025320
            )
        );

        $this->routes = $this->route($this->routes);

        $this->limit = !empty($config['media_limit']) ? $config['media_limit'] : 100;

        $this->Format = new Format($this);
        $this->Endpoint = new Endpoint($this, self::$client);
    }

    public function run(\WP_REST_Request $request) {
        $handler_name = null;
        $handler_params = null;

        $this->path = str_replace('/v1', '', $this->input('path', '', false));
        $this->count = $this->input('count', 33);

        foreach ($this->routes as $r) {
            $params_matches = array();

            if (preg_match('#^' . $r['regex'] . '#', preg_replace('#(.*)\/$#', '$1', $this->path), $params_matches)) {
                $handler_name = $r['handler'];
                $handler_params = array_slice($params_matches, 1);
                break;
            }
        }

        if (empty($handler_name) || !method_exists($this->Endpoint, $handler_name)) {
            $this->error(400, self::$ERROR_INVALID_REQUEST, self::$ERROR_INVALID_ROUTE);
        }

        if ($handler_params[0]) {
            $handler_params[0] = urldecode($handler_params[0]);
        }

        return call_user_func(array($this->Endpoint, $handler_name), $handler_params[0]);
    }

    function request($type, $url, $options = array())
    {
        $this->Debug->dump('REQUEST: ' . $url);

        $response = $this->retryRequest(10, array($type, $url, $options));

        $this->Debug->dump($response['http_code'] === 200 ? '---- SUCCESS ----' : '---- FAIL ----');

        return $response;
    }

    function retryRequest($times, array $params)
    {
        beginning:

        $times--;

        $response = parent::request(...$params);

        $this->Debug->dump('RETRY REMAINS: ' . $times);
        $this->Debug->dump('RESPONSE CODE: ' . $response['http_code']);
        $this->Debug->dump('TIMESTAMP: ' . (round(microtime(true) * 1000) - $this->startTime));

        if ($response['http_code'] === 200 || !$times) {
            return $response;
        }

        goto beginning;
    }

    function route($list) {
        $map = array();

        foreach ($list as $path => $handler_name) {
            $map[] = array(
                'regex' => str_replace('/', '\/', preg_replace('#\{[^\{]+\}#', '([^/$]+)', $path)),
                'handler' => $handler_name
            );
        }

        return $map;
    }

    public function checkResponse($response, $exit) {
        if (!$response['status']) {
            return $exit ? $this->error(400, null, $response) : false;

        } else {
            $code = (int) $response['http_code'];

            if ($code !== 200) {
                if ($exit) {
                    if ($code === 404) {
                        return $this->error($code, $response['http_message']);
                    } else {
                        return $this->error($code, null, $response['http_message']);
                    }
                } else {
                    $this->metaInfo['query_err'] = $code;
                    return false;
                }
            }
        }

        return true;
    }

    public function getPageData($response_body) {
        if (!preg_match('#window\._sharedData\s?=\s?(.*);<\/script>#', $response_body, $page_data_matches)) {
            return $this->subError(self::$ERROR_PARSE);
        }

        $page_data = json_decode($page_data_matches[1], true);

        if (empty($page_data) || empty($page_data['entry_data'])) {
            return $this->subError(self::$ERROR_EMPTY_PAGE);
        }

        $this->rhxGis = isset($page_data['rhx_gis']) ? $page_data['rhx_gis'] : '';
        $this->csrfToken = $page_data['config']['csrf_token'];

        return $page_data['entry_data'];
    }

    public function getEntryData($data, $path, $exit = true) {
        $entry = $data;

        for ($i = 0; $i < count($path); $i++) {
            if (!isset($entry[$path[$i]])) {
                return $exit ? $this->subError(self::$ERROR_EMPTY_TREE) : false;
            } else {
                $entry = $entry[$path[$i]];
            }
        }

        return $entry;
    }

    public function getNodesData($query_body_json) {
        $nodes = array();
        $end_cursor = false;

        $query_body = json_decode($query_body_json, true);
        $data = $query_body['data'];

        if ($data) {
            if (isset($data['user'])) {
                $nodes = $this->getEntryData($data, array('user', 'edge_owner_to_timeline_media', 'edges'));
                $end_cursor = $this->setEndCursor($data['user']['edge_owner_to_timeline_media']);

            } else if (isset($data['hashtag'])) {
                $nodes = $this->getEntryData($data, array('hashtag', 'edge_hashtag_to_media', 'edges'));
                $end_cursor = $this->setEndCursor($data['hashtag']['edge_hashtag_to_media']);

            } else if (isset($data['location'])) {
                $nodes = $this->getEntryData($data, array('location', 'edge_location_to_media', 'edges'));
                $end_cursor = $this->setEndCursor($data['location']['edge_location_to_media']);

            }
        }

        return array($this->Format->formatNodes($nodes), $end_cursor, count($nodes));
    }

    public function recursiveQueryRequest($cache_key, $variables, $query_hash, $formatted_data = array(), $cursor = 0) {
        $query_res = $this->queryRequest($variables, $query_hash);

        if ($this->checkResponse($query_res, false)) {
            list($nodes, $end_cursor, $count) = $this->getNodesData($query_res['body']);

            $formatted_data = $this->Helper->uniqueSort(array_merge_recursive($formatted_data, $nodes), 'created_time');
            $formatted_data = array_slice($formatted_data, 0, $this->limit);

            $cursor += $count;

            if ($count < $variables['first'] || $cursor >= $this->limit) {
                $this->Cache->set($cache_key, $formatted_data, false);

                return $formatted_data;
            } else {
                sleep(1);
                $variables['after'] = $end_cursor;

                return $this->recursiveQueryRequest($cache_key, $variables, $query_hash, $formatted_data, $cursor);
            }
        } else {
            $this->Cache->set($cache_key, $formatted_data, true);

            return $formatted_data;
        }
    }

    function queryRequest($variables, $query_hash) {
        $variables_json = json_encode($variables);
        $gis = md5(join(':', array($this->rhxGis, $variables_json)));

        if (class_exists($this->Throttle)) {
            $this->Throttle->increment();
        }

        $query = array(
            'variables' => $variables_json
        );

        if (is_int($query_hash)) {
            $query['query_id'] = $query_hash;
        } else {
            $query['query_hash'] = $query_hash;
        }

        $headers = array(
            'X-Csrftoken' => $this->csrfToken,
            'X-Requested-With' => 'XMLHttpRequest',
            'X-Instagram-Ajax' => '1',
            'X-Instagram-Gis' => $gis
        );

        return $this->request('get', self::$client['base_url'] . '/graphql/query/', array('query' => $query, 'headers' => $headers));
    }

    public function setEndCursor($data) {
        if (!empty($data['page_info']) && !empty($data['page_info']['end_cursor'])) {
            return $data['page_info']['end_cursor'];
        }
    }

    public function paginate($list, $cursor) {
        $media_from_offset = 0;

        if ($this->maxId) {
            foreach ($list as $k => $item) {
                if ($item['id'] == $this->maxId) {
                    $media_from_offset = $k + 1;
                    break;
                }
            }
        }

        $pagination = null;
        $page_list = array_slice($list, $media_from_offset, $this->count);

        $next_media_offset = $media_from_offset + $this->count;

        if (!empty($list[$next_media_offset])) {
            $page_last_item = end($page_list);

            $pagination = array(
                'next_url' => $this->getNextPageUrl($page_last_item['id'], $cursor),
                'next_' . $cursor => $page_last_item['id']
            );
        }

        return array($page_list, $pagination);
    }

    public function fallbackCache($cache, $data) {
        if (!empty($data)) {
            return $data;
        }

        $cache_data = $this->Cache->get($cache['key'], false);

        if (!empty($cache_data)) {
            $this->metaInfo['fallback_cache'] = $cache['expired'];
            return json_decode($cache_data, true);
        } else {
            if (isset($this->metaInfo['throttle_limited'])) {
                return $data;
            } else {
                return $this->subError(esc_html__('storage empty'));
            }
        }
    }

    public function getNextPageUrl($next_id, $cursor) {
        $params = $_GET;
        $params[$cursor] = $next_id;

        return $_SERVER['REQUEST_URI'] . ($params ? '?' . http_build_query($params): '');
    }

    public function getMeta($code) {
        $meta = array(
            'code' => $code
        );

        foreach ($this->metaInfo as $key => $value) {
            !!$value && $meta[$key] = $value;
        }

        return $meta;
    }
}
