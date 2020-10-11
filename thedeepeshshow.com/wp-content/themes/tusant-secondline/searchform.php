<?php
/**
 * The template for displaying search forms
 *
 * @package slt
 */
?>
<form method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label>
		<span class="screen-reader-text"><?php _ex( 'Search for:', 'label', 'tusant-secondline' ); ?></span>
		<input type="search" class="search-field" placeholder="<?php echo esc_attr_x( 'Search...', 'placeholder', 'tusant-secondline' ); ?>" value="<?php echo esc_attr( get_search_query() ); ?>" name="s">
	</label>
	<input type="submit" class="search-submit" value="<?php echo esc_attr__( 'Submit', 'tusant-secondline' ); ?>">
	<div class="clearfix-slt"></div>
</form>