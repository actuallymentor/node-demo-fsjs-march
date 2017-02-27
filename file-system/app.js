// Require the file system module
const fs = require( 'fs' )

// ///////////////////////////////
// Create two files
// ///////////////////////////////

fs.writeFile( __dirname + '/temp.txt', 'Some words', err => {
	// Throw an error if the file was not written
	if ( err ) throw err
	// Give some feedback
	console.log( 'Everything went ok for some words' )
} )

fs.writeFile( __dirname + '/temp-2.txt', 'Some potatoes', err => {
	// Throw an error if the file was not written
	if ( err ) throw err
	// Give some feedback
	console.log( 'Everything went ok for potatoes' )
} )

// ///////////////////////////////
// Read all text files
// ///////////////////////////////

fs.readdir( __dirname, ( err, files ) => {
	if ( err ) throw err
	console.log( files )

	// Filter out the files with .txt
	let filteredfiles = files.filter( file => {
		return file.indexOf( '.txt' ) >= 0 ? true : false
	} )
	console.log( filteredfiles )

	// Loop over and read the text files
	let filedata = []
	let wehaveread = 0
	for (var i = 0; i < filteredfiles.length; i++) {
		// Read the file contents
		fs.readFile( __dirname + '/' + filteredfiles[i], 'utf8', ( err, data ) => {
			if ( err ) throw err
			filedata.push( data )
			wehaveread ++
			if ( wehaveread == filteredfiles.length ) console.log( filedata )
		} )
	}
} )


















// /////////////////////////////// 
// Notes
// ///////////////////////////////
// function sayhello ( greeting ) {

// }

// let sayhello = function( greeting ) {

// }

// let sayhello = ( greeting ) => {

// }

// fs.writeFile( __dirname + '/temp.txt', 'Some words', function( err ) {

// } )

// fs.writeFile( __dirname + '/temp.txt', 'Some words', ( err ) => {

// } )