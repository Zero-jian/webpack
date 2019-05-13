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
                            limit: 1000,
                            name: '[name]-[hash:5].[ext]',
                            outputPath: 'img/',
                            publicPath: './'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name]-[hash:5].[ext]',
                    output: 'fonts/',
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
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'media/[name].[hash:8].[ext]'
                                }
                            }
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
        extensions: ['js','json','vue'],
        alias: {
            '@': path.resolve(__dirname,'../src')
        }
    }
}