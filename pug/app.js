const express = require( 'express' )
const app = express( )
const bodyparser = require( 'body-parser' )

app.set( 'views', __dirname + '/views' )
app.set( 'view engine', 'pug' )
app.use( '/static', express.static( __dirname + '/static' ) )

app.use( bodyparser.urlencoded( { extended: true } ) )

app.get( '/', ( req, res ) => {
	let products = [
		{ name: 'oranges', price: 100 },
		{ name: 'apples', price: 200 },
		{ name: 'bananas', price: 50 },
		{ name: 'bapples', price: 9999 },
		{ name: 'ukulele', price: 42 }
	]
	// Display the index page
	res.render( 'index', {
		user: 'Mentor',
		today: 'Wednesday',
		products: products
	} )
} )

app.post( '/api', ( req, res ) => {
	console.log( req.body )
	res.send( 'Very well done ' + req.body.name )
} )

app.get( '/api', ( req, res ) => {
	console.log( req.query )
	res.send( 'This was a get request ' +req.query.name + '. Thank you. Come again.' )
} )

app.listen( 3000, f => {
	console.log( 'App running' )
} )