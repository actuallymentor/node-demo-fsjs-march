const express = require( 'express' )
const app = express( )

app.get( '/', ( req, res ) => {
	res.send( 'Hello' )
} )

app.post( '/login', ( req, res ) => {
	res.send( 'success' )
} )

app.listen( 3000, f => {
	console.log( 'App running' )
} )

module.exports = app