const express = require( 'express' )
const router = express.Router( )

const showfile = require( __dirname + '/../modules/promise-fs' )

// Route to send the contesnts of 'file.txt' to the browser
router.get( '/file1', ( req, res ) => {
	// This uses the promise wrapper from promise-fs.js
	showfile( __dirname + '/../resources/file.txt', res )
} )

router.get( '/file2', ( req, res ) => {
	// This uses the promise wrapper from promise-fs.js
	showfile( __dirname + '/../resources/second.txt', res )
	// This will not wotk because 'fs' is not required
	// fs.readFile( __dirname + '/../resources/second.txt', 'utf8', ( err, data ) => {
	// 	if ( err ) return res.send( 'Something went terribly wrong, sorry about that.' )
	// 	res.send( data )
	// } )
} )

module.exports = router