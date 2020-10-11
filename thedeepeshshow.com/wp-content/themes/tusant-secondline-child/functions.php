<?php
/**
 * Theme functions and definitions.
 */
function tusantsecondline_child_enqueue_styles() {

    wp_enqueue_style( 'tusant-secondline-style' , get_template_directory_uri() . '/style.css' );

    wp_enqueue_style( 'tusant-secondline-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( 'tusant-secondline-style' ),
        wp_get_theme()->get('Version')
    );

    if ( is_rtl() ) {
        wp_enqueue_style( 'tusant-secondline-rtl', get_template_directory_uri() . '/rtl.css' );
    }

}

add_action(  'wp_enqueue_scripts', 'tusantsecondline_child_enqueue_styles' );