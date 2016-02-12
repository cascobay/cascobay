var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'source/js/main.js'),
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
        loaders: ['eslint']
        // include: PATHS.app
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: '/node_modules/',
        query: {
          presets: 'es2015'
        }
      },
      //For CSS Modules
      {
        test: /\.css$/, loaders: ['style', 'css']
      },
      //For SASS Modules
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }

    ]
  },
  //webpack will assume modules without a suffix are these types
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      styles: 'source/styles'
    },
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
