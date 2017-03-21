const expect = require( 'chai' ).expect

const importeddoubler = require( __dirname + '/../modules/doubler' )

describe( 'The doubler', f => {

	it( 'Doubles 2 to 4', done => {
		let result = importeddoubler( 2 )
		expect( result ).to.equal( 4 )
		done( )
	} )

	it( 'Doubles 8 to 16', done => {
		let result = importeddoubler( 8 )
		expect( result ).to.equal( 16 )
		done( )
	} )

	it( 'Doubles 42 to 84', done => {
		let result = importeddoubler( 42 )
		expect( result ).to.equal( 84 )
		done( )
	} )

	it( 'Doubles 1.5 to 3', done => {
		let result = importeddoubler( 1.5 )
		expect( result ).to.equal( 3 )
		done( )
	} )

} )