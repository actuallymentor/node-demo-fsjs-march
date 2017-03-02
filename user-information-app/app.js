const express = require( 'express' )
const app = express( )
const fs = require( 'fs' )
const bodyparser = require( 'body-parser' )

app.set( 'view engine', 'pug' )
app.set( 'views', __dirname + '/views' )

app.use( bodyparser.urlencoded( { extended: true } ) )

console.log( 'Debugging is set to ' + process.env.debug )

app.get( '/', ( req, res ) => {
	// Step 1: read the file
	fs.readFile( __dirname + '/data/users.json', 'utf8', ( err, data ) => {
		// Step 2: interpret the file as an array of objects
		let jsondata = JSON.parse( data )
		// Step 3: render a page with this object
		res.render( 'index', {
			users: jsondata
		} )
	} )
} )

app.get( '/search', ( req, res ) => {
	res.render( 'search' )
} )

app.post( '/search', ( req, res ) => {

	if ( process.env.debug ) console.log( req.body.search )

	// Step 1: read the file
	fs.readFile( __dirname + '/data/users.json', 'utf8', ( err, data ) => {
		// Step 2: interpret the file as an array of objects
		let jsondata = JSON.parse( data )

		// Step 3: find results
		let searchresults = []

		// Loop over every user object in the array
		for (let i = 0; i < jsondata.length; i++) {
			// Check for matching conditions
			if (
				// Condition 1: does the search exist in the name attr
				( jsondata[i].name.toLowerCase().indexOf( req.body.search.toLowerCase() ) != -1 ) ||
				// OR condition 2: does the search exist in the email attr
				( jsondata[i].email.toLowerCase().indexOf( req.body.search.toLowerCase() ) != -1 )
				// If there is a match on either, add the current object to the results array
			) searchresults.push( jsondata[i] )
		}

		// Console results for debugging purposes
		if ( process.env.debug ) console.log( searchresults )

		// Step 4: render a page with results
		res.render( 'results', {
			results: searchresults
		} )
	} )

} )

app.get( '/register', ( req, res ) => {
	res.render( 'register' )
} )

app.post( '/register', ( req, res ) => {
	if ( process.env.debug ) console.log( req.body )
	// Step 1: read the file
	fs.readFile( __dirname + '/data/users.json', 'utf8', ( err, data ) => {
		// Step 2: interpret the file as an array of objects
		let jsondata = JSON.parse( data )
		jsondata.push( {
			name: req.body.username,
			email: req.body.email
		} )
		if ( process.env.debug ) console.log( jsondata )
		fs.writeFile( __dirname + '/data/users.json', JSON.stringify( jsondata ), err => {
			if ( err ) throw err
			if ( process.env.debug ) console.log( 'New user data written to file' )
			res.redirect( '/' )
		} )
	} )
} )

app.listen( 3000, f => {
	console.log( 'Server started' )
} )