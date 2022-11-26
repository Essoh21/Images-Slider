const path = require('path');
const HtmlWabpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundlle.js',
        clean: true,
    },

    /*  devServer: {
          static: path.resolve(__dirname, "dist"),
          open: true,
          hot: true
      },
  */
    // loaders 
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',

            },

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(svg|png|ico|jpg|jpeg|webp|gif|)$/i,
                type: "asset/resource",
            },

            {
                test: /\.(js|jsx)$/i,
                use: 'babel-loader',
            },

        ],
    },

    // Plugins 
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWabpackPlugin({ template: './src/index.html' }),
    ]
};