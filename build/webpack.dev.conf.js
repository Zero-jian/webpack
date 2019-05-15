const webpackConfig = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(webpackConfig,{
    mode: 'development',
    // source-map,将编译后的代码映射到原代码，便于报错后定位错误
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(c|le)ss$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
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
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // 启用模块热替换(HMR)
        new webpack.HotModuleReplacementPlugin(),
        // 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname,'../dist'),
        // hot: true,
        port: 9090,
        overlay: {
            warnings: true,
            errors: true
        },
        publicPath: '/'
    }
})