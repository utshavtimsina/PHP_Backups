<?php

namespace ElfsightFacebookFeedApi;


class Options extends Core\Options {
    private $tokensRegistryOptionName;

    public function __construct($Helper, $config) {
        $this->tokensRegistryOptionName = $Helper->getOptionName('tokens_registry');

        parent::__construct($Helper, $config);
    }

    public function modifyOptions() {
        $this->modifyOption('pageAccessToken',
            array(
                'defaultValue' => '',
                'custom' => array('encrypt' => false, 'type' => 'facebook-page-token', 'pageProperty' => 'page')
            )
        );
        $this->modifyOption('accessToken',
            array(
                'defaultValue' => '',
                'custom' => array('encrypt' => false, 'type' => 'facebook-page-token', 'pageProperty' => 'page')
            )
        );
        $this->modifyOption('apiUrl',
            array(
                'defaultValue' => $this->apiUrl
            )
        );
    }

    public function shortcodeOptionsFilter($options) {
        $options = parent::shortcodeOptionsFilter($options);

        if (is_array($options)) {
            $tokens_registry = get_option($this->tokensRegistryOptionName);

            $ref_key = $options['page'];

            if (
                $tokens_registry
                && !empty($tokens_registry['refs'][$ref_key])
            ) {
                $options['accessToken'] = $tokens_registry['refs'][$ref_key];
            }
        }

        return $options;
    }

    public function widgetOptionsFilter($options_json) {
        $options_json = parent::widgetOptionsFilter($options_json);
        $options = json_decode($options_json, true);

        if (is_array($options)) {
            $tokens_registry = get_option(
                $this->tokensRegistryOptionName,
                array(
                    'refs' => array(),
                    'aliases' => array()
                )
            );

            if (!empty($options['page']) && !empty($options['accessToken'])) {
                $ref_key = $options['page'];
                $ref = !empty($tokens_registry['refs'][$ref_key]) ? $tokens_registry['refs'][$ref_key] : uniqid();

                $tokens_registry['refs'][$ref_key] = $ref;
                $tokens_registry['aliases'][$ref] = $options['accessToken'];

                update_option($this->tokensRegistryOptionName, $tokens_registry);
            }
        }

        return json_encode($options);
    }
}
