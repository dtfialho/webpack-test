'use strict';
var webpack = require('webpack')
  , path    = require('path');

var APP = path.join(__dirname, 'app');

module.exports = {
	context: APP,
	entry: {
		app: './core/bootstrap.js'
	},
	output: {
		path: APP,
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false}})
	],
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.js$/,
				loader: 'ng-annotate!babel?presets[]=es2015!jshint',
				exclude: /node_modules|bower_components/
			},
			{
				test: /\.css$/,
				loader: "style!css"
			},
			{
				test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
				loader : 'file-loader?name=res/[name].[ext]?[hash]'
			},
			{
				test: /\.html/,
				loader: 'raw'
			},
			{
				test: /\.json/,
				loader: 'json'
			}
		]
	},
	resolve: {
		root: path.join(__dirname, 'app')
	}
};