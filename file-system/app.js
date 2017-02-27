// Require the file system module
const fs = require( 'fs' )

fs.writeFile( __dirname + '/temp.txt', 'Some words', err => {
	// Throw an error if the file was not written
	if ( err ) throw err
	// Give some feedback
	console.log( 'Everything went ok' )
} )

fs.readFile( __dirname + '/temp.txt', 'utf-8', ( err, data ) => {
	// Throw error if there is an error
	if ( err ) throw err
	// Display contents of read file
	console.log( 'The data is: ' + data )
	console.log( `The data is: ${data}` )
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