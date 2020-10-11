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
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '123456' );

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
define( 'AUTH_KEY',         'p9bFi%xf,?Xi{FbsesROF,>L#3MjuQ)l;H.mhmZ#N e(gTlM%Yq@bYZ6~z-*}W^+' );
define( 'SECURE_AUTH_KEY',  'GUXnGS?Q-g{XP7;O>_hA/1t92&*Rl=b8G-bN|ZN4`[jiI[N?_u2GISS>g4J[E.DQ' );
define( 'LOGGED_IN_KEY',    '.mL[ayb(Ay>aL oV%R9d,79`Ogf{6<lN(TU[k/a8+aF)6c{vGJBtI]Nni`slX4`k' );
define( 'NONCE_KEY',        'Uc$xwm6V^Hn4>HhnhUJlUf^$vez%Mk6^OM9F3*@:b7~!,2w! `8eQYS i~Jp>>@|' );
define( 'AUTH_SALT',        '_}nK6WCT2j&itDH34212rZ[yFi{kU!)fH}C2)cwBN[UA0b0BzJuyW*fA^BJ*I>(;' );
define( 'SECURE_AUTH_SALT', '}x)s7ch[rwsh@)l]j*MCX OS`3?e:{aIEIn~R>DhJ*KWuV1gUO7a$gtr1%@Y@2_n' );
define( 'LOGGED_IN_SALT',   ')mB>1e.d3xsl;c4tHq`)l8T&6)@.LvATC6#HWG7<x`)>d:H/Sw6b~ogW/YjMks!a' );
define( 'NONCE_SALT',       'b]EdKwk[BM4}_~N1Y@5rYQlq/tN#oEYuTh7:lL.BJJRl2eP<&TVJuKeRvzXhaD;$' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
