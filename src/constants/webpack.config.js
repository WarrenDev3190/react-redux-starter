import {join} from 'path'
import webpack from 'webpack'

module.exports = {
	entry: join(__dirname,'../app/index'),
	output: {
		filename: 'bundle.js',
		path: join(__dirname,'../server/public/dist/js'),
		publicPath: '/static/'
	},
	devTools: ['eval-source-maps'],
	plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin()],
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loaders: ['babel'],
				include: join(__dirname, '../app'),
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loaders: ['style','css','sass']
			}
		]
	}
}