/**
 * External dependencies
 */
import page from 'page';

/**
 * Internal dependencies
 */
import config from 'config';
import controller from './controller';

export default function() {
	if ( config.isEnabled( 'mailing-lists/unsubscribe' ) ) {
		// not putting category or email address in params, since `page`
		// currently double-decodes the URI before doing route matching
		// https://github.com/visionmedia/page.js/issues/306
		page( '/mailing-lists/unsubscribe', controller.unsubscribe );
	}
};