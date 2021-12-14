const baseConfig = require( '@wordpress/scripts/config/webpack.config.js' );

module.exports = {
	...baseConfig,
	entry: {
		'basic-script': './js/basic-script/index.js',
	},
};
