<?php

namespace Bruno;

defined( 'ABSPATH' ) || exit;

class Bruno {

	/** @var Bruno */
	private static $instance = null;

	public static function get_instance() {
		if ( self::$instance === null ) {
			self::$instance = new Bruno();
		}
		return self::$instance;
	}


	public static function add_numbers( $a, $b ) {
		return $a + $b;
	}

	private function __construct() {
		// Initialize theme here
	}

}
