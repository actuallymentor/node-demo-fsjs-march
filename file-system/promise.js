const fs = require( 'fs' )

const writeFilePromise = ( target, data ) => {
	return new Promise( ( resolve, reject ) => {
		fs.writeFile( target, data, err => {
			if ( err ) return reject ( err )
			resolve( 'It worked' )
		} )
	} )
}

Promise.all( [
	writeFilePromise( __dirname + '/pfile1.txt', 'Wrote one' ),
	writeFilePromise( __dirname + '/pfile2.txt', 'Wrote two' ),
	writeFilePromise( __dirname + '/pfile3.txt', 'Wrote three' ),
	writeFilePromise( __dirname + '/pfile4.txt', 'Wrote four' ),
	writeFilePromise( __dirname + '/pfile5.txt', 'Wrote five' )
] ).then( allresults => {
	console.log( 'All are done' )
} ).catch( console.log.bind( console ) )