const webpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const webpack = require('webpack');
//抽离CSS样式
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//压缩css
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
//压缩JS
const TerserWebpackPlugin = require('terser-webpack-plugin');
//清理dist
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(webpackConfig,{
    mode: 'production',
    devtool: 'cheap-source-map',
    module: {
        rules: [
            {
                test: /\.(c|le)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: loader=>[
                                require('autoprefixer')({
                                    browsers: [
                                        "last 2 versions",
                                        "> 1%"
                                    ]
                                })
                            ]
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[hash:5].css',
            chunkFilename: 'css/[id]-[hash:5].css',
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
    ],
    optimization: {
        minimizer: [
            //压缩css
            new OptimizeCssAssetsWebpackPlugin({}),
            // 压缩JS
            new TerserWebpackPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            }),
        ]
    }
});