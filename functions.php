<?php

define('CHILD_THEME_URI', get_stylesheet_directory_uri());

if (!function_exists('star_security_scripts')) {

    function star_security_scripts() {

         
        wp_enqueue_style('star-security-bootstrap-css', CHILD_THEME_URI.'/assets/bootstrap/css/bootstrap.css',array('style'));
        
        wp_enqueue_style('star-security-css', CHILD_THEME_URI.'/layouts/star-security.css');
        wp_enqueue_script('star-security-js', CHILD_THEME_URI . '/js/star-security.js', array('jquery'), '20190403', TRUE);
        wp_enqueue_script('star-security-bootstrap-js', CHILD_THEME_URI . '/assets/bootstrap/js/bootstrap.min.js', array('jquery'), '20190403', TRUE);
    }

}

add_action('wp_enqueue_scripts', 'star_security_scripts', 20);
