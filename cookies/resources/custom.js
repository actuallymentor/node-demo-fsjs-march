console.log( 'Custom JS is loaded' )

if ( Cookies.get( 'visited' ) ) {
	// $( '#hasvisited' )
	document.getElementById( 'hasvisited' ).innerHTML = ' back'
}

console.log( 'When opening the page, the cookie was ' + Cookies.get( 'visited' ) )
Cookies.set( 'visited', true )
console.log( 'The cookie is now: ' + Cookies.get( 'visited' ) )

// const THECOOKIE = {
// 	visited: true
// }