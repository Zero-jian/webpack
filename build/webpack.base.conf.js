const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        filename: 'js/[name].[hash:5].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: './'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'img/[name]-[hash:5].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name]-[hash:5].[ext]',
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            name: 'media/[name]-[hash:5].[ext]',
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
    ],
    resolve: {
        extensions: ['.js','.json','.vue'],
        alias: {
            '@': path.resolve(__dirname,'../src')
        }
    }
}