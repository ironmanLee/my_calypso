/**
 * External dependencies
 */
var React = require( 'react' );

/**
 * Internal dependencies
 */
var AcceptDialog = require( './dialog' );

module.exports = function( message, callback, confirmButtonText, cancelButtonText ) {
	var wrapper = document.createElement( 'div' );
	document.body.appendChild( wrapper );

	function onClose( result ) {
		if ( wrapper ) {
			document.body.removeChild( wrapper );
			wrapper = null;
		}

		if ( callback ) {
			callback( result );
		}
	}

	React.render(
		React.createElement( AcceptDialog, {
			message: message,
			onClose: onClose,
			confirmButtonText: confirmButtonText,
			cancelButtonText: cancelButtonText,
		} ),
		wrapper
	);
};
