const { activateTheme } = require( '@wordpress/e2e-test-utils' );
const { dirname, basename } = require( 'path' );

const themeSlug = basename( dirname( __dirname ) );

beforeAll( async () => {
	await activateTheme( themeSlug );
} );
