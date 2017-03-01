$( document ).ready( function( ){
	console.log( 'DOM Loaded' )
	$( '#guestbook' ).on( 'submit', function( event ) {
		event.preventDefault( )

		let formdata = {
			name: event.target[0].value,
			message: event.target[1].value
		}

		$.post( '/api', formdata,function( response ) {
			$( '#feedback' ).html( response )
			$( '#guestbook' ).hide( )
		} )

	} )
} )