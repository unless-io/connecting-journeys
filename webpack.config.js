const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './source/javascripts/application.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
  ],

  optimization: { 
    minimize: true, 
    minimizer: [ 
      new TerserPlugin({ 
        cache: true, 
        parallel: true, 
        terserOptions: { 
          output: {
            comments: false
          }
        }
      }), 
    ]
  }
};