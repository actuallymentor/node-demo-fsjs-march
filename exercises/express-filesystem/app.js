const express = require( 'express' )
const app = express( )

// Serve static file
app.use( express.static( __dirname + '/public' ) )
// This is also possible
// app.use( '/static', express.static( __dirname + '/public' ) )

const files = require( __dirname + '/routes/files' )

app.use( '/potato', files )

app.listen( 3000, f => {
	console.log( 'Server listening' )
} )