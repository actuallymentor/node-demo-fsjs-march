const fs = require( 'fs' )

const readJson = target => {
	return new Promise( ( resolve, reject ) => {
		fs.readFile( target, 'utf8', ( err, data ) => {
			if ( err ) return reject( err )
			// The resolve will send data to the .then() called after the execution of readjson
			resolve( JSON.parse( data ) )
		} )
	} )
}

const writetxt = ( target, content ) => {
	return new Promise( ( resolve, reject ) => {
		fs.writeFile( target, content, err => {
			if ( err ) return reject( err )
			resolve( content )
		} )
	} )
}

readJson( __dirname + '/users.json' ).then( parsedData => {
	// parsedData is the result of JSON.Parse( data ) from the resolve of readJson
	// parsedData is an array
	return Promise.all( parsedData.map( user => {
		return writetxt( __dirname + '/' + user.name + '.txt', user.age + ' ' + user.hair )
	} ) )
} ).then( allResults => {
	console.log( allResults )
} ).catch( console.log.bind( console ) )