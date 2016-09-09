var webpack = require('webpack')
  , path    = require('path');

const APP = __dirname;

module.exports = {
	context: APP + '/app',
	entry: {
		app: './app.js',
		vendor: ['angular']
	},
	output: {
		path: APP + '/js',
		filename: 'app.bundle.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename */"vendor.bundle.js"),
		new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false}})
	]
};