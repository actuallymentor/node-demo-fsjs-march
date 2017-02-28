// Require the main express library
const express = require( 'express' )

// Create our app from the library
const app = express( )

// Import our user router
const user = require( __dirname + '/routes/user' )

// Mount the routes of the 'user' module on the /user path
// In other words, run the sub-app called user under '/user'
// We now have /user/new and /user/delete
app.use( '/user', user )

// The main route saying hello
app.get( '/', ( req, res ) => {
	console.log( 'Someone is visiting us!' )
	res.send( 'Hello Sir' )
} )

// Make the server listen on port 3000
app.listen( 3000, f => {
	console.log( 'Server running YAY' )
} )