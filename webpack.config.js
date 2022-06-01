const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
      filename: "./main.js",
      path: path.resolve(__dirname, "./dist")
    },
	devtool: 'eval-source-map',
	devServer: {
		hot: "only",
	},
	performance: {
		maxEntrypointSize: 1024000,
		maxAssetSize: 1024000
	},
    module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							outputPath: 'assets/',
							options: {
								publicPath: 'assets',
							},
						}
					}
				]
			},
			{
				test:/\.html$/,
				use: [
					'html-loader'
				]
			}
		]
	},
	plugins: [
		require("autoprefixer"),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
		}),
		new FaviconsWebpackPlugin('assets/icons/favicon.png')
	]
  }