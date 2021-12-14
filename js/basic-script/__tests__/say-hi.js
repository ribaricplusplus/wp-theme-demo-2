import { sayHi } from '../index';

describe( 'Say hi function', () => {
	it( 'Can say hi to dad', () => {
		expect( sayHi( 'dad' ) ).toBe( 'Hello dad' );
	} );
} );
