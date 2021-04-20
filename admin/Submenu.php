<?php
namespace wpAdminVue\Admin;

trait Submenu {

    public function wp_admin_submenu() {
        global $submenu;

        $capability = 'manage_options';

        $submenu[ PAGE_SLUG ][] = array( __( 'Feedback', TEXTDOMAIN ), $capability, 'admin.php?page=' . PAGE_SLUG . '#/' );
        $submenu[ PAGE_SLUG ][] = array( __( 'List', TEXTDOMAIN ), $capability, 'admin.php?page=' . PAGE_SLUG . '#/list' );
        $submenu[ PAGE_SLUG ][] = array( __( 'Settings', TEXTDOMAIN ), $capability, 'admin.php?page=' . PAGE_SLUG . '#/settings' );
    }

}