
const path = require('path')
const {
    merge
} = require('webpack-merge')
const pug = require('./webpack/pug')
const scss = require('./webpack/scss')
const images = require('./webpack/images')
const fonts = require('./webpack/fonts')
const devServer = require('./webpack/devserver')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const prettier = require('./webpack/prettier')
const clean = require('./webpack/clean')

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
}

const common = merge([{
        entry: {
            'index': PATHS.source + '/index.js',
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        devServer: {
            historyApiFallback: true,
            contentBase: path.join(__dirname, 'build/pages/Weleda'),
        },
        optimization: {
            minimizer: [
                new OptimizeCssAssetsWebpackPlugin({})
            ]
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ["babel-loader"]
            },
          ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/index.pug'
            }),

            new MiniCssExtractPlugin({
                filename: '[name].css',
                // chunks: ['index', 'common', 'form-elements']
            }),

        ]
    },
    pug(),
    scss(),
    // images(PATHS.source, PATHS.build),
    // fonts()
])

module.exports = function (env) {
    if (env === 'production') {
        return merge([
        common,
        prettier(),
        clean()])
    }
    if (env === 'development') {
        return merge([
            common,
            devServer()
        ])
    }
}