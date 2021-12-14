import { createURL } from '@wordpress/e2e-test-utils';

describe( 'Home page', () => {
	it( 'Has hello world', async () => {
		const homeUrl = createURL( '/' );
		await page.goto( homeUrl );
		await page.waitForSelector( 'body' );
		const content = await page.$eval( '#my-site-title', ( element ) => {
			return element.innerText;
		} );
		expect( content ).toBe( 'Hello world!' );
	} );
} );
