// Require the main express library
const express = require( 'express' )

// Generate a router object form the express library
// A router is sort of an empty 'app' that only has route logic

const router = express.Router( )

// A route that says 'Yay'
router.get( '/new', ( req, res ) => {
	res.send( 'Yay new user' )
} )

// A route that pretends to have deleted a user
router.get( '/delete', ( req, res ) => {
	res.send( 'Deleted user' )
} )

// Export the router so the require()
// in the main app knows what to touch
module.exports = router