const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'web',
    mode: 'development',
    watch: true,
    entry: {
        main: ['./src/index.js'],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WriteFilePlugin(),
        new HtmlWebpackPlugin({
            title: 'Spotify Sharify',
            filename: 'index.html',
            template: './src/index.html',
            inject: true,
            // favicon: config.paths.favicon,
        })
    ],
    resolve: {
        extensions: ['.jsx', '.js', '.scss', '.json'],
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: true,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['react', ['env', { modules: false }], 'stage-0'],
                },
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    }
}