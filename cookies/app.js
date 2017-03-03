const express = require( 'express' )
const app = express( )
const cookieparser = require( 'cookie-parser' )

// Parse the cookies to a readable object format
app.use( cookieparser( ) )


// Console.log some interesting data about the user
app.use( ( req, res, next ) => {
	console.log( 'Someone is using our website. We are so popular.' )
	console.log( 'It is ' + Date.now( ) )
	console.log( 'This request is a ' + req.method )
	console.log( 'This user has the following cookies:' )
	console.log( req.cookies )
	next( )
} )

// This serves STATIC files, meaning they do not change and are not interpreted
app.use( '/', express.static( __dirname + '/resources' ) )


// These templates NEVER reach the browser. They are converted to HTML which does reach the browser
app.set( 'view engine', 'pug' )
app.set( 'views', __dirname + '/views' )

// Display a pug page
app.get( '/pugified', ( req, res ) => {
	console.log( req.cookies )
	res.render( 'index' )
} )

app.listen( 3000, f => {
	console.log( 'Server running' )
} )