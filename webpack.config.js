var path = require('path');
var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'source/main.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
    inline: true,
    colors: true,
    progress: true
  },
  module: {
    //when webpack bundles modules together, it will lint first, then translate to es2015
    preLoaders: [
      {
        test: /\.js?$/,
        loaders: ['eslint'],
        include: path.resolve(__dirname, 'source')
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.resolve(__dirname, 'source'),
        query: {
          presets: 'es2015'
        }
      },
      //For CSS Modules
      {
        test: /\.css$/,
        loaders: ['style', 'css']
        // include: path.resolve(__dirname, 'source')
      },
      { test: /.(png|woff(2)?|eot|gif|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' },
      //For SASS Modules
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(__dirname, 'source')
      }

    ]
  },

  resolve: {
    root: path.resolve(__dirname),
    moduleDirectories: ['node_modules', 'bower_components'],
    alias: {
      styles: 'source/styles',
    },
    //webpack will assume modules without a suffix are these types
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
