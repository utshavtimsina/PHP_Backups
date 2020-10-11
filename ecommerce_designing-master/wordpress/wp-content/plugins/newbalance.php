<?php
/*
Plugin Name: ShoeSite
Version: 1.3
*/

add_shortcode('n', 'newbalance_shortcode');

    function newbalance_shortcode($atts){
        extract (shortcode_atts (array('user_name' => 'NewBalance'), $atts));
        
        $output = '<a class="twitter-timeline" href="';
        $output .= esc_url('https://twitter.com/' . $user_name);
        $output .= '">';
        $output .= '</a><script async src="https://platform.twitter.com/widgets.js"</script>';
        
        return $output;
    }
?>