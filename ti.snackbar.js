var Snackbar = require('android.support.design.widget.Snackbar');

/**
 * Show the Snackbar for a short period of time.
 */
exports.SNACKBAR_LENGTH_SHORT = Snackbar.LENGTH_SHORT;

/**
 * Show the Snackbar for a long period of time.
 */
exports.SNACKBAR_LENGTH_LONG = Snackbar.LENGTH_LONG;

/**
 * Show the Snackbar indefinitely.
 */
exports.SNACKBAR_LENGTH_INDEFINITE = Snackbar.LENGTH_INDEFINITE;

/**
 * Make a Snackbar to display a message.
 * @param args The arguments passed to present a new message.
 */
exports.show = function(args) {
  var container = args.container;
  var message = args.message;
  var length = args.length;

  var	snackbar = Snackbar.make(container, message, length);
	snackvar.show();
};
