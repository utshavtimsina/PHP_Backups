<?php
/**
 * @package slt
 */
?>
<ul class="secondline-themes-social-icons<?php if (get_theme_mod( 'secondline_themes_footer_icon_text', 'off') == 'off') : ?> secondline-themes-footer-icon-text-hide<?php endif; ?><?php if (get_theme_mod( 'secondline_themes_footer_icon_location_align') == 'right') : ?> secondline-themes-footer-icon-align-right<?php endif; ?><?php if (get_theme_mod( 'secondline_themes_footer_icon_location_align') == 'left') : ?> secondline-themes-footer-icon-align-left<?php endif; ?>">
	<?php if (get_theme_mod( 'secondline_themes_footer_facebook')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_facebook')); ?>" target="_blank" class="secondline-themes-facebook" title="<?php echo esc_attr__( 'Facebook', 'tusant-secondline' ); ?>"><i class="fab fa-facebook-f"></i><span><?php echo esc_html__( 'Facebook', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_twitter')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_twitter')); ?>" target="_blank" class="secondline-themes-twitter" title="<?php echo esc_attr__( 'Twitter', 'tusant-secondline' ); ?>"><i class="fab fa-twitter"></i><span><?php echo esc_html__( 'Twitter', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_instagram')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_instagram')); ?>" target="_blank" class="secondline-themes-instagram" title="<?php echo esc_attr__( 'Instagram', 'tusant-secondline' ); ?>"><i class="fab fa-instagram"></i><span><?php echo esc_attr__( 'Instagram', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_spotify')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_spotify')); ?>" target="_blank" class="secondline-themes-spotify" title="<?php echo esc_attr__( 'Spotify', 'tusant-secondline' ); ?>"><i class="fab fa-spotify"></i><span><?php echo esc_attr__( 'Spotify', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_youtube' )) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_youtube')); ?>" target="_blank" class="secondline-themes-youtube" title="<?php echo esc_attr__( 'Youtube', 'tusant-secondline' ); ?>"><i class="fab fa-youtube"></i><span><?php echo esc_attr__( 'Youtube', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_vimeo')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_vimeo')); ?>" target="_blank" class="secondline-themes-vimeo" title="<?php echo esc_attr__( 'Vimeo', 'tusant-secondline' ); ?>"><i class="fab fa-vimeo"></i><span><?php echo esc_attr__( 'Vimeo', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_rss')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_rss')); ?>" target="_blank" class="secondline-themes-rss" title="<?php echo esc_attr__( 'RSS', 'tusant-secondline' ); ?>"><i class="fa fa-rss"></i></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_itunes')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_itunes')); ?>" target="_blank" class="secondline-themes-itunes" title="<?php echo esc_attr__( 'Podcast', 'tusant-secondline' ); ?>"><i class="fa fa-podcast"></i></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_android')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_android')); ?>" target="_blank" class="secondline-themes-android" title="<?php echo esc_attr__( 'Android', 'tusant-secondline' ); ?>"><i class="fab fa-android"></i></a></li><?php endif; ?>	
    <?php if (get_theme_mod( 'secondline_themes_footer_patreon')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_patreon')); ?>" target="_blank" class="secondline-themes-patreon" title="<?php echo esc_attr__( 'Patreon', 'tusant-secondline' ); ?>"><i class="fab fa-patreon"></i><span><?php echo esc_attr__( 'Patreon', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>	
	<?php if (get_theme_mod( 'secondline_themes_footer_pinterest')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_pinterest')); ?>" target="_blank" class="secondline-themes-pinterest" title="<?php echo esc_attr__( 'Pinterest', 'tusant-secondline' ); ?>"><i class="fab fa-pinterest"></i><span><?php echo esc_attr__( 'Pinterest', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_soundcloud')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_soundcloud')); ?>" target="_blank" class="secondline-themes-soundcloud" title="<?php echo esc_attr__( 'Soundcloud', 'tusant-secondline' ); ?>"><i class="fab fa-soundcloud"></i><span><?php echo esc_attr__( 'Soundcloud', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_linkedin')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_linkedin')); ?>" target="_blank" class="secondline-themes-linkedin" title="<?php echo esc_attr__( 'LinkedIn', 'tusant-secondline' ); ?>"><i class="fab fa-linkedin"></i><span><?php echo esc_attr__( 'LinkedIn', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_snapchat')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_snapchat')); ?>" target="_blank" class="secondline-themes-snapchat" title="<?php echo esc_attr__( 'Snapchat', 'tusant-secondline' ); ?>"><i class="fab fa-snapchat-ghost"></i><span><?php echo esc_attr__( 'Snapchat', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_tumblr')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_tumblr')); ?>" target="_blank" class="secondline-themes-tumblr" title="<?php echo esc_attr__( 'Tumblr', 'tusant-secondline' ); ?>"><i class="fab fa-tumblr"></i><span><?php echo esc_attr__( 'Tumblr', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_flickr')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_flickr')); ?>" target="_blank" class="secondline-themes-flickr" title="<?php echo esc_attr__( 'Flickr', 'tusant-secondline' ); ?>"><i class="fab fa-flickr"></i><span><?php echo esc_attr__( 'Flickr', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_dribbble')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_dribbble')); ?>" target="_blank" class="secondline-themes-dribbble" title="<?php echo esc_attr__( 'Dribbble', 'tusant-secondline' ); ?>"><i class="fab fa-dribbble"></i><span><?php echo esc_attr__( 'Dribbble', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_vk')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_vk')); ?>" target="_blank" class="secondline-themes-vk" title="<?php echo esc_attr__( 'VK', 'tusant-secondline' ); ?>"><i class="fab fa-vk"></i><span><?php echo esc_attr__( 'VK', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_wordpress')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_wordpress')); ?>" target="_blank" class="secondline-themes-wordpress" title="<?php echo esc_attr__( 'WordPress', 'tusant-secondline' ); ?>"><i class="fab fa-wordpress"></i><span><?php echo esc_attr__( 'WordPress', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_mixcloud')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_mixcloud')); ?>" target="_blank" class="secondline-themes-mixcloud" title="<?php echo esc_attr__( 'MixCloud', 'tusant-secondline' ); ?>"><i class="fab fa-mixcloud"></i><span><?php echo esc_attr__( 'MixCloud', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_behance')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_behance')); ?>" target="_blank" class="secondline-themes-behance" title="<?php echo esc_attr__( 'Behance', 'tusant-secondline' ); ?>"><i class="fab fa-behance"></i><span><?php echo esc_attr__( 'Behance', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_github')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_github')); ?>" target="_blank" class="secondline-themes-github" title="<?php echo esc_attr__( 'GitHub', 'tusant-secondline' ); ?>"><i class="fab fa-github"></i><span><?php echo esc_attr__( 'Github', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_lastfm')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_lastfm')); ?>" target="_blank" class="secondline-themes-lastfm" title="<?php echo esc_attr__( 'LastFM', 'tusant-secondline' ); ?>"><i class="fab fa-lastfm"></i><span><?php echo esc_attr__( 'LastFM', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_medium')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_medium')); ?>" target="_blank" class="secondline-themes-medium" title="<?php echo esc_attr__( 'Medium', 'tusant-secondline' ); ?>"><i class="fab fa-medium"></i><span><?php echo esc_attr__( 'Medium', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_reddit')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_reddit')); ?>" target="_blank" class="secondline-themes-reddit" title="<?php echo esc_attr__( 'Reddit', 'tusant-secondline' ); ?>"><i class="fab fa-reddit"></i><span><?php echo esc_attr__( 'Reddit', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_tripadvisor')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_tripadvisor')); ?>" target="_blank" class="secondline-themes-tripadvisor" title="<?php echo esc_attr__( 'Trip Advisor', 'tusant-secondline' ); ?>"><i class="fab fa-tripadvisor"></i><span><?php echo esc_attr__( 'Trip Advisor', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_twitch')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_twitch')); ?>" target="_blank" class="secondline-themes-twitch" title="<?php echo esc_attr__( 'Twitch', 'tusant-secondline' ); ?>"><i class="fab fa-twitch"></i><span><?php echo esc_attr__( 'Twitch', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_yelp')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_yelp')); ?>" target="_blank" class="secondline-themes-yelp" title="<?php echo esc_attr__( 'Yelp', 'tusant-secondline' ); ?>"><i class="fab fa-yelp"></i><span><?php echo esc_attr__( 'Yelp', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_discord')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_discord')); ?>" target="_blank" class="secondline-themes-discord" title="<?php echo esc_attr__( 'Discord', 'tusant-secondline' ); ?>"><i class="fab fa-discord"></i><span><?php echo esc_attr__( 'Discord', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	<?php if (get_theme_mod( 'secondline_themes_footer_bandcamp')) : ?><li><a href="<?php echo esc_url(get_theme_mod('secondline_themes_footer_bandcamp')); ?>" target="_blank" class="secondline-themes-bandcamp" title="<?php echo esc_attr__( 'Bandcamp', 'tusant-secondline' ); ?>"><i class="fab fa-bandcamp"></i><span><?php echo esc_attr__( 'Bandcamp', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>	
	
	<?php if (get_theme_mod( 'secondline_themes_footer_mail')) : ?><li><a href="mailto:<?php echo esc_attr(get_theme_mod('secondline_themes_footer_mail')); ?>" class="secondline-themes-mail" title="<?php echo esc_attr__( 'Email', 'tusant-secondline' ); ?>"><i class="fa fa-envelope"></i><span><?php echo esc_attr__( 'Email', 'tusant-secondline' ); ?></span></a></li><?php endif; ?>
	
</ul><!-- close .secondline-themes-social-icons -->