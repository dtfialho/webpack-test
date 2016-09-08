'use strict';
require('angular');
require('./vendor')();

var appModule = require('../index');
angular.element(document).ready(function(){
	angular.bootstrap(document, [appModule.name], {
		//strictDi: true
	});
});