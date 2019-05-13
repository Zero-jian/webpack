const webpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
//抽离CSS样式
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//环境变量
const devMode = process.env.NODE_ENV === 'production';
console.log(devMode);
module.exports = merge(webpackConfig,{
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(c|le)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: loader => [
                                require('autoprefixer')({
                                    brosers: [
                                        'last 10 Chrome versions',
                                        'last 5 Firefox versions',
                                        'Safari >= 6',
                                        'ie > 8'
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
    }
});