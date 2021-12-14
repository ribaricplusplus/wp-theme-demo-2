const { fromConfigRoot } = require( '@wordpress/scripts/utils' );
const baseConfig = require( fromConfigRoot( 'jest-e2e.config.js' ) );
const path = require( 'path' );

module.exports = {
	...baseConfig,
	setupFilesAfterEnv: [
		...baseConfig.setupFilesAfterEnv,
		path.join( __dirname, 'scripts/activate-theme.js' ),
	],
};
