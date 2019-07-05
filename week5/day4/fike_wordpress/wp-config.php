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
define( 'DB_NAME', 'fike_wordpress' );

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
define( 'AUTH_KEY',         '4__EEC Oaf!0}uBIbCCnzbSwY9ywo$hHiOAtM|4~84<<2;c%n!T[~B2gm-Q@=hDv' );
define( 'SECURE_AUTH_KEY',  'r#vYGtrYst^B]&x!Z+S]P%#7it?oo&>kRKsd@__j1Dd)oIr FZ4h<0yqePce}<Cx' );
define( 'LOGGED_IN_KEY',    '?y1Nb_5YAKTMC]!=uTOOvF%Q?7TbF |X$V@H* gFnkZ%kGm>ej&tw.*9eFt_x39C' );
define( 'NONCE_KEY',        '1`v}!@~}:60;!0dmK@pVQz/dh^8LL>7%{UpUP um.FUFmC jB^U%2VMu&~5MZvQ)' );
define( 'AUTH_SALT',        '^y6][-6B*=5}#K,g4$eK8,0j50j-)q 9z&7HsScpG}J58besJ3M9>[|lN>vi8GLj' );
define( 'SECURE_AUTH_SALT', '&gZ[CKE$,AfX$INn7KOYyM|=v9m(?IZ<6 0K8@,;E9y[Q6,Fquhl:>fRXtf3[)sc' );
define( 'LOGGED_IN_SALT',   '8F^<VFs.%{m/;< 6_3iI<](oYS4g&l^R0:n76crYpYIl1u`:$NgS%OYQT^AG5$b`' );
define( 'NONCE_SALT',       'AB,.rbd|2C<#RS[Ao&w!h(p+{trnxa]W EOt;D3*Day&ArW@%eYvAGIcT8760Ps[' );

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
