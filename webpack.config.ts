import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import MomentLocalesPlugin from 'moment-locales-webpack-plugin';

const webpackConfig = (env): Configuration => ({
	entry: './src/index.tsx',
	...(env.production || !env.development ? {} : { devtool: 'eval-source-map' }),
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		//TODO waiting on https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/61
		//@ts-ignore
		plugins: [new TsconfigPathsPlugin()],
	},
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'build.js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'babel-loader',
				exclude: /build/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
						},
					},
				],
			},
			{
				test: /\.ico$|\.jpe?g$|\.gif$|\.png$|\.svg$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'assets/',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			favicon: './src/assets/favicon.png',
		}),
		new webpack.DefinePlugin({
			'process.env.PRODUCTION': env.production || !env.development,
			'process.env.NAME': JSON.stringify(require('./package.json').name),
			'process.env.VERSION': JSON.stringify(require('./package.json').version),
		}),
		new ForkTsCheckerWebpackPlugin({
			eslint: {
				files: './src/**/*.{ts,tsx,js,jsx}',
			},
		}),
		new MomentLocalesPlugin(),
	],
});

export default webpackConfig;
