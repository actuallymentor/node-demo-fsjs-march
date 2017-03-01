const fs = require( 'fs' )

// This promise purely reads a file and spits out the content
// To the .then(  ) after it
const readPromise = target => {
	return new Promise( ( resolve, reject ) => {
		fs.readFile( target, 'utf8', ( err, data ) => {
			if ( err ) return reject ( err )
			resolve( data )
		} )
	} )
}

// This is a wrapper function to send the file contetns to the browser
const showfile = ( target, res ) => {
	// Note that the res here is sent from the route that triggers the function
	readPromise( target ).then( resultingdata => {
		res.send( resultingdata )
	} ).catch( error => {
		console.log( 'OH NOOO: ' + error )
		res.send( 'This broke, that is not funny.' )
	} )
}

module.exports = showfile