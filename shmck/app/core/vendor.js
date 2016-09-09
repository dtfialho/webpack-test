module.exports = function() {
	/* JS */
	global.$ = global.jQuery = require('jquery');
	require('node-lumx/node_modules/velocity-animate');
	require('angular');
	global.moment = require('node-lumx/node_modules/moment');
	require('node-lumx');

	/* Styles */
	require('../index.scss');
	require('../../node_modules/mdi/css/materialdesignicons.min.css');
};