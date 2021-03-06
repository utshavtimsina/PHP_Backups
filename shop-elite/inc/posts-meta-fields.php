<?php
/**
 * Implement posts metabox.
 *
 * @package Shop_Elite
 */

if ( ! function_exists( 'shop_elite_add_theme_meta_box' ) ) :

	/**
	 * Add the Meta Box
	 *
	 * @since 1.0.0
	 */
	function shop_elite_add_theme_meta_box() {

		$post_types = array( 'post', 'page', 'product' );

		foreach ( $post_types as $post_type ) {
			add_meta_box(
				'shop-elite-meta-box',
                sprintf( esc_html__( '%1s Settings', 'shop-elite' ), ucwords($post_type) ),
				'shop_elite_meta_box_html',
                $post_type
			);
		}

	}

endif;
add_action( 'add_meta_boxes', 'shop_elite_add_theme_meta_box' );

if ( ! function_exists( 'shop_elite_meta_box_html' ) ) :

	/**
	 * Render theme settings meta box.
	 *
	 * @since 1.0.0
	 */
	function shop_elite_meta_box_html( $post ) {

        wp_nonce_field( basename( __FILE__ ), 'shop_elite_meta_box_nonce' );
        
        /*Get image sizes*/
        $image_sizes = shop_elite_get_all_image_sizes(true);
        
        $page_layout = get_post_meta($post->ID,'shop_elite_page_layout',true);
        $image_settings = get_post_meta($post->ID,'shop_elite_single_image',true);
        ?>
        <div id="shop-elite-settings-metabox-container" class='inside'>
            <h3><label for="page-layout"><?php echo __( 'Page Layout', 'shop-elite' ); ?></label></h3>
            <p>
                <select name="shop_elite_page_layout" id="page-layout">
                    <option value=""><?php _e( '&mdash; Select &mdash;', 'shop-elite' )?></option>
                    <option value="left-sidebar" <?php selected('left-sidebar',$page_layout);?>>
                        <?php _e( 'Primary Sidebar - Content', 'shop-elite' )?>
                    </option>
                    <option value="right-sidebar" <?php selected('right-sidebar',$page_layout);?>>
                        <?php _e( 'Content - Primary Sidebar', 'shop-elite' )?>
                    </option>
                    <option value="no-sidebar" <?php selected('no-sidebar',$page_layout);?>>
                        <?php _e( 'No Sidebar', 'shop-elite' )?>
                    </option>
                </select>
            </p>
            <hr/>
            <h3><label for="image-settings"><?php echo __( 'Featured Image on Detail Page', 'shop-elite' ); ?></label></h3>
            <p>
                <select name="shop_elite_single_image" id="image-settings">
                    <option value=""><?php _e( '&mdash; Select &mdash;', 'shop-elite' )?></option>
                    <?php
                    if(!empty($image_sizes)){
                        foreach ($image_sizes as $key => $val){
                            ?>
                            <option value="<?php echo esc_attr($key);?>" <?php selected($key, $image_settings);?>>
                                <?php echo esc_html($val); ?>
                            </option>
                            <?php
                        }
                    }
                    ?>
                </select>
            </p>
            <hr/>
        </div>
        <?php
	}

endif;


if ( ! function_exists( 'shop_elite_save_postdata' ) ) :

	/**
	 * Save posts meta box value.
	 *
	 * @since 1.0.0
	 *
	 * @param int  $post_id Post ID.
	 */
	function shop_elite_save_postdata( $post_id ) {

		// Verify nonce.
		if ( ! isset( $_POST['shop_elite_meta_box_nonce'] ) || ! wp_verify_nonce( $_POST['shop_elite_meta_box_nonce'], basename( __FILE__ ) ) ) {
			  return; }

		// Bail if auto save or revision.
		if ( defined( 'DOING_AUTOSAVE' ) || is_int( wp_is_post_revision( $post_id ) ) || is_int( wp_is_post_autosave( $post_id ) ) ) {
			return;
		}

		// Check the post being saved == the $post_id to prevent triggering this call for other save_post events.
		if ( empty( $_POST['post_ID'] ) || $_POST['post_ID'] != $post_id ) {
			return;
		}

        /*Get image sizes*/
        $image_sizes = shop_elite_get_all_image_sizes(true);

		// Check permission.
		if ( 'page' === $_POST['post_type'] ) {
			if ( ! current_user_can( 'edit_page', $post_id ) ) {
				return;
			}
		} else if ( 'product' === $_POST['post_type'] ) {
            if ( ! current_user_can( 'edit_product', $post_id ) ) {
                return;
            }
        }else if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

        if ( isset( $_POST['shop_elite_page_layout'] )){
            $valid_layout_values = array(
                'left-sidebar',
                'right-sidebar',
                'no-sidebar',
            );
            $layout_value = sanitize_text_field( $_POST['shop_elite_page_layout'] );
            if( in_array( $layout_value, $valid_layout_values ) ) {
                update_post_meta($post_id, 'shop_elite_page_layout', $layout_value);
            }else{
                delete_post_meta($post_id,'shop_elite_page_layout');
            }
        }

        if ( isset( $_POST['shop_elite_single_image'] )){

            $image_value = sanitize_text_field( $_POST['shop_elite_single_image'] );
            if( array_key_exists( $image_value, $image_sizes ) ) {
                update_post_meta($post_id, 'shop_elite_single_image', $image_value);
            }else{
                delete_post_meta($post_id,'shop_elite_single_image');
            }
        }

	}

endif;
add_action( 'save_post', 'shop_elite_save_postdata' );