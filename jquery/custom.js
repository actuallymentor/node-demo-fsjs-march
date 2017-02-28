$( document ).ready( function(  ){
	console.log( 'DOM has loaded' )
	$( 'p' ).hide( )
	$( 'h1' ).click( function( ){
		console.log( 'H1 has been clicked' )
		$( this ).hide( )
		$( 'p' ).slideDown( 5000 )
	} )
} )