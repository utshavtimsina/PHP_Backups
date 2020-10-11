<?php
/*
Plugin Name: Elfsight Facebook Feed CC
Description: Make your Facebook content (Posts, Photos, Videos) work on your website
Plugin URI: https://elfsight.com/facebook-feed-widget/wordpress/?utm_source=markets&utm_medium=codecanyon&utm_campaign=facebook-feed&utm_content=plugin-site
Version: 1.14.0
Author: Elfsight
Author URI: https://elfsight.com/?utm_source=markets&utm_medium=codecanyon&utm_campaign=facebook-feed&utm_content=plugins-list
*/

if (!defined('ABSPATH')) exit;


require_once('core/elfsight-plugin.php');
require_once('api/api.php');

$elfsight_facebook_feed_config_path = plugin_dir_path(__FILE__) . 'config.json';
$elfsight_facebook_feed_config = json_decode(file_get_contents($elfsight_facebook_feed_config_path), true);

new ElfsightFacebookFeedApi\Api(
	array(
		'plugin_slug' => 'elfsight-facebook-feed',
		'plugin_file' => __FILE__,
		'cache_time' => 21600,
		'editor_config' => &$elfsight_facebook_feed_config
	)
);

new ElfsightFacebookFeedPlugin(array(
        'name' => esc_html__('Facebook Feed'),
        'description' => esc_html__('Make your Facebook content (Posts, Photos, Videos) work on your website'),
        'slug' => 'elfsight-facebook-feed',
        'version' => '1.14.0',
        'text_domain' => 'elfsight-facebook-feed',
        'editor_settings' => $elfsight_facebook_feed_config['settings'],
        'editor_preferences' => $elfsight_facebook_feed_config['preferences'],

        'plugin_name' => esc_html__('Elfsight Facebook Feed'),
        'plugin_file' => __FILE__,
        'plugin_slug' => plugin_basename(__FILE__),

        'vc_icon' => plugins_url('assets/img/vc-icon.png', __FILE__),
        'menu_icon' => plugins_url('assets/img/menu-icon.png', __FILE__),

        'update_url' => esc_url('https://a.elfsight.com/updates/v1/'),
        'product_url' => esc_url('https://1.envato.market/b1VMm'),
        'helpscout_plugin_id' => 109093
    )
);

?>
