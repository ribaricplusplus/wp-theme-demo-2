const { execSync } = require( 'child_process' );
const path = require( 'path' );

const ROOT_DIR = path.join( __dirname, '..' );
process.chdir( ROOT_DIR );

const commands = [ 'composer install', 'npm install' ];

for ( const command of commands ) {
	execSync( command, { stdio: 'inherit' } );
}

execSync( 'composer dump-autoload --dev', { stdio: 'inherit' } );
