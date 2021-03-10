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
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new webpack.DefinePlugin({
			'process.env.PRODUCTION': env.production || !env.development,
			'process.env.NAME': JSON.stringify(require('./package.json').name),
			'process.env.VERSION': JSON.stringify(require('./package.json').version),
		}),
		new ForkTsCheckerWebpackPlugin({
			eslint: {
				files: './src/**/*.{ts,tsx,js,jsx}', // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
			},
		}),
		new MomentLocalesPlugin(),
	],
});

export default webpackConfig;
