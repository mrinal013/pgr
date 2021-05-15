<?php
namespace wpAdminVue\Admin;

trait Submenu {

    public function wp_admin_submenu() {
        $capability = 'manage_options';

        add_submenu_page( PAGE_SLUG, __( 'Feedback', 'pgr' ), __( 'Feedback', 'pgr'), $capability, 'admin.php?page=' . PAGE_SLUG . '#/feedback' );
        add_submenu_page( PAGE_SLUG, __( 'List', 'pgr' ), __( 'List', 'pgr' ), $capability, 'admin.php?page=' . PAGE_SLUG . '#/feedback-list' );
        //add_submenu_page( PAGE_SLUG, __( 'Settings', 'pgr' ), __( 'Settings', 'pgr' ), $capability, 'admin.php?page=' . PAGE_SLUG . '#/feedback-settings' );
        
        global $submenu;
        unset( $submenu['pgr-grid'][0] );
    }

}