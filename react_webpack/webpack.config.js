var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var entry = require('./config.js');

module.exports = {
	entry: entry,
	resolve: {
		extentions: ["", "js", "jsx"]
	},
	devtool :"source-map",
	module: {
		loaders: [{
			test: /\.(es6|jsx)$/,
			exclude: nodeModulesPath,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015','stage-2']
			}
		},
		{
            test: /\.styl/,
            exclude: [nodeModulesPath],
            loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!stylus')
        }]
	},
	output: {
		path: path.resolve(__dirname, './build'),
		publicPath:'/build/',
		filename: './[name].js',
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("./[name].css")
	]
};