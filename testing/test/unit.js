const expect = require( 'chai' ).expect

const word = 'bird'

describe( 'Check if the bird is the word', f => {

	it( 'Is indeed bird', done => {
		expect( word ).to.equal( 'bird' )
		done( )
	} )

	it( 'The word has a length of 4', done => {
		expect( word ).to.have.lengthOf( 4 )
		done( )
	} )

	// This test would fail
	// it( 'The word has a length of 6', done => {
	// 	expect( word ).to.have.lengthOf( 6 )
	// 	done( )
	// } )

} )