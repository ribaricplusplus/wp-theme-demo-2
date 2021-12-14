<?php

namespace Bruno\Test;

class FirstTest extends \WP_UnitTestCase {
	function test_2_plus_2() {
		$bruno = \Bruno\Bruno::get_instance();
		$this->assertEquals( 4, $bruno->add_numbers( 2, 2 ) );
	}
}
