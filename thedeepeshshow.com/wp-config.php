<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/home/deepeshc/thedeepeshshow.com/wp-content/plugins/wp-super-cache/' );
define( 'DB_NAME', 'deepeshc_wp303' );

/** MySQL database username */
define( 'DB_USER', 'deepeshc_wp303' );

/** MySQL database password */
define( 'DB_PASSWORD', 'S50)rvp1A@' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '318igthdarw3lruuzlojsokjdo5nhda1uezfqqarygbfqcjvlgof1embsnqotahf' );
define( 'SECURE_AUTH_KEY',  '0jqranmwuziirckq6xvamrjyu8lf1t9vtqgkvhrn655of0yy72tbbzwa3eufq3m8' );
define( 'LOGGED_IN_KEY',    'r69sjxfbxsfijobirm1ibwgcprhdzdbdyxgxnsrhbw3tiekwaev5qvqmsvz9fx5r' );
define( 'NONCE_KEY',        '7i9b2rjq0b7d5f8oiidcapmoezspj7aykpsc3tnvlewh8fuyiejhnlxutmakj12c' );
define( 'AUTH_SALT',        'efoo2n9yewuwugloplac4r6tjsbo4mnfhch5nxhjctqzupljhvxckufpr254z1yo' );
define( 'SECURE_AUTH_SALT', 'nvttfu1wlwnx75ishcvzjpvpjskugi2zrsbabqetagqz3fbisidoiwuqevpihpzy' );
define( 'LOGGED_IN_SALT',   'v6mprcclimk1g3q3ur34buog3yfrfiqbt78ffkxkscvxyfyc09cpd1zosntvzowu' );
define( 'NONCE_SALT',       'ke6aqktehyw2xcbj99b2ri6bp2az92ywg89gwqvprdu2iubtrehuaf3h0btc1zps' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpmm_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

@ini_set('upload_max_size' , '512M' );
define( 'WP_MEMORY_LIMIT', '512M' ); 
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
