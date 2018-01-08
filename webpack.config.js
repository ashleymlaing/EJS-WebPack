// module.exports = {
//   entry: './src/index.js'
// }

// const path = require('path')
//
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   }
// }

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    // entry: './src/index.js',
    entry: {
        // app: './src/index.js',
        // print: './src/print.js'
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        // preLoaders: [
        //     // Javascript
        //     { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ }
        // ],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
        }],
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }]
            //     {
            //        test: /\.(png|svg|jpg|gif)$/,
            //        use: [
            //          'file-loader'
            //        ]
            //      },
            //      {
            //        test: /\.(woff|woff2|eot|ttf|otf)$/,
            //        use: [
            //          'file-loader'
            //        ]
            //      },
            //     {
            //        test: /\.(csv|tsv)$/,
            //        use: [
            //         'csv-loader'
            //        ]
            //      },
            //      {
            //        test: /\.xml$/,
            //        use: [
            //          'xml-loader'
            //        ]
            //      }

    ],
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
}
}