const express = require( 'express' )
const app = express( )
const session = require( 'express-session' )

app.use( session( {
	secret: 'oh my god so very super secure',
	resave: false,
	saveUninitialized: false,
	cookie: {
		secure: false,
		maxAge: 1000 * 60 * 60
	}
} ) )


app.get( '/', ( req, res ) => {

	console.log( req.session )
	
	// req.session = {
	// 	cookie: { ... },
	// 	visited: true
	// }

	let response = req.session.visited ? "Welcome back" : "Welcome"
	let otherresponse = req.session.user ? "Welcome back " + req.session.user.name : "Welcome stranger"

	// res.render( 'profile', {
	// 	username: req.session.user,
	// 	email: req.session.email
	// } )

	// if ( req.session.visited ) {
	// 	response = 'Welcome back'
	// } else {
	// 	response = 'Welcome'
	// }

	req.session.visited = true
	res.send( response )
	
} )


// THIS IS NON FUNCTIONAL CODE
app.post( '/login', ( req, res ) => {
	db.User.findOne( {
		where: {
			email: req.body.email
		}
	} ).then( user => {
		// In reality we NEVER EVER save plain text passwords. Hash your goods.
		if ( user.password == req.body.password ) {
			req.session.user = user
			// req.session.user = {
			// 	email: mentor@palokaj.co,
			// 	name: "Mentor"
			// }
			res.send( 'Logged in' )
		} else {
			res.send( 'Wrong password' )
		}
	} )
} )


app.listen( 3000, f => {
	console.log( 'Server running' )
} )