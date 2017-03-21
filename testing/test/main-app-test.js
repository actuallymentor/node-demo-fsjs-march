const expect = require( 'chai' ).expect
const request = require( 'supertest' )
const application = require( __dirname + '/../app' )
const app = request( application )

describe( 'The / route', f => {

	it( 'Is online', done => {
		app.get( '/' )
		.expect( 200 )
		.end( done )
	} )

	it( 'Says hello', done => {
		app.get( '/' )
		.then( response => {
			expect( response.text ).to.equal( 'Hello' )
			done( )
		} )
	} )

} )