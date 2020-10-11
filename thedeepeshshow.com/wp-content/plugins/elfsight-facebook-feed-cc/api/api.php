<?php

namespace ElfsightFacebookFeedApi;


if (!defined('ABSPATH')) exit;

require_once __DIR__ . '/vendor/autoload.php';

class Api extends Core\Api {
    private $routes = array(
        '' => 'requestController',
        'preview' => 'linkPreviewController'
    );

    private $tokensRegistryOptionName;

    const API_BASE_URL = 'https://graph.facebook.com/';

    public function __construct($config) {
        parent::__construct($config, $this->routes);

        $this->tokensRegistryOptionName = $this->Helper->getOptionName('tokens_registry');
    }

    public function requestController() {
        $tokens_registry = get_option($this->tokensRegistryOptionName);

        $q = $this->input('q');
        $page_token = $this->input('page_token', '', false);

        if (
            $tokens_registry
            && !empty($tokens_registry['aliases'][$page_token])
        ) {
            $page_token = $tokens_registry['aliases'][$page_token];
        }

        $cache_key = $this->Cache->keyFromQuery($q, array('fields')) . $page_token;
        $cache_data = $this->Cache->get($cache_key);

        $data = array();

        if (empty($cache_data)) {
            $request_url = $this->buildRequestUrl($q, $page_token);

            $response = $this->request('GET', $request_url);

            if (!empty($response)) {
                if (!empty($response['body'])) {
                    $data = $response['body'];
                    $data_arr = json_decode($response['body'], true);

                    if (!empty($data_arr['error'])) {
                        $error = $data_arr['error'];
                        return $this->fbError($error['code'], $error['type'] . ': ' . $error['message']);
                    }
                }

                if (!empty($response['http_code']) && (int) $response['http_code'] === 200) {
                    $this->Cache->set($cache_key, $data);
                }

            } else {
                return $this->error();
            }
        } else {
            $data = $cache_data;
        }

        return $this->response($data);
    }

    public function linkPreviewController() {
        if (PHP_VERSION_ID < 50600 || !class_exists('\LinkPreview\LinkPreview')) {
            return $this->response(json_encode(array()));
        }

        $url = urldecode($this->input('q'));

        $cache_key = $this->Cache->keyFromQuery($url);
        $data = $this->Cache->get($cache_key);

        if (empty($data)) {
            $data = array();
            $linkPreview = new \LinkPreview\LinkPreview($url);

            try {
                $parsed = $linkPreview->getParsed();

                foreach ($parsed as $parserName => $link) {
                    $data = array(
                        'url' => $url,
                        'title' => $link->getTitle(),
                        'description' => $link->getDescription(),
                        'cover' => $link->getImage()
                    );
                }
            } catch (Exception $e) {}

            $data = json_encode($data);
            $this->Cache->set($cache_key, $data);
        }

        return $this->response($data);
    }

    public function fbError($code, $message, $fbtrace_id = null) {
        $error = array(
            'error' => array(
                'code' => $code,
                'message' => $message
            )
        );

        if ($fbtrace_id) {
            $fbtrace_id && $error['error']['fbtrace_id'] = $fbtrace_id;
        }

        return $this->response($error, array('encode' => true));
    }

    public function buildRequestUrl(&$url, $page_token) {
        if ($page_token) {
            $url = $this->Helper->removeQueryParam($url, 'access_token');
            $url = $this->Helper->addQueryParam($url, 'access_token', $page_token);
        }

        $url = preg_replace('/^v\d.\d{0,2}(%2F|\/)/', '', $url);

        if (stripos($url, self::API_BASE_URL) === false) {
            $url = self::API_BASE_URL . $url;
        }

        return $url;
    }
}
