const express = require( 'express' )
const app = express( )

// This serves STATIC files, meaning they do not change and are not interpreted
app.use( '/', express.static( __dirname + '/resources' ) )


// These templates NEVER reach the browser. They are converted to HTML which does reach the browser
app.set( 'view engine', 'pug' )
app.set( 'views', __dirname + '/views' )

app.get( '/pugified', ( req, res ) => {
	res.render( 'index' )
} )

app.listen( 3000, f => {
	console.log( 'Server running' )
} )