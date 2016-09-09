var webpack = require('webpack')
  , path    = require('path');

const APP = __dirname;

module.exports = {
	context: path.join(APP, 'app'),
	entry: {
		app: './app.js',
		vendor: ['angular']
	},
	output: {
		path: path.join(APP, 'js'),
		filename: 'app.bundle.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename */"vendor.bundle.js"),
		new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false}})
	]
};