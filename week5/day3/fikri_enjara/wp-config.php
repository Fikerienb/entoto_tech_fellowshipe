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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'fikri_enjara' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

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
define( 'AUTH_KEY',         '0|z_*uRUd oRayvdlA^[_K-5~pcI} Ng!i|j{|B3mtCU0^b/IvIyZ2.GE3L^bw~e' );
define( 'SECURE_AUTH_KEY',  'qnr<_*1&Ew-@,V+`*[q9{<x64S)#=!/#t/l{d hW4DiXouFz1!xEc*Gp%[5GV:|f' );
define( 'LOGGED_IN_KEY',    '*u3pJ)SQ=;oIBEsNk[EE>MtGt#a{f+*XK^g|Ni_cdua$7a8RPi-WJpxy.^l)N26%' );
define( 'NONCE_KEY',        'WShr!7=.80F`!ump$E3y$AinkF586mGgDG1 T:.z(l.HotIS&Wm1[dpi]3a`XpvM' );
define( 'AUTH_SALT',        ')}*J|A0R<)TaI5xg_aCy?huxbz4zSs>=fn9z2HaLt|lR_?T(ykaf,W]pP)D&b{tJ' );
define( 'SECURE_AUTH_SALT', '.|Y`Hxv 7kzI[I_.>j-l@x$3WBN^K@RKJKbR=Je~_x_WP~^5;9%,f7~L.yqO[*~M' );
define( 'LOGGED_IN_SALT',   '3<qFSH4b)~${GBg_p9.|-M9Y.[ochpE_m<;-0/W5!%D>30m97M)/rMfWM-bL0?bZ' );
define( 'NONCE_SALT',       ']G;1*deL~fX|Syyy}e#/hZBq)EuKgWk]ibD3duou?ZfZy1)e,e2F`4ZdBV-wZ[KE' );

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
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
