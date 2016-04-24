var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'source/index.js'),
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
  devtool: 'cheap-module-source-map',
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
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.resolve(__dirname, 'source'),
        query: {
          presets: ['es2015', 'react']
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
      components: 'source/js/components',
      containers: 'source/js/containers',
      actions: 'source/js/actions',
      reducers: 'source/js/reducers',
      store: 'source/js/store',
      constants: 'source/js/constants',
      assets: 'public/assets'
    },
    //webpack will assume modules without a suffix are these types
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
            warnings: false
        }
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ]
}
