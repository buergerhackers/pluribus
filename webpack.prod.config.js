const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    './client/app/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    plublicPath: '/public/'
  },
  module: {
    loaders: [
      { 
        test: /\.jsx$/, 
        include: __dirname + '/client', 
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }, 
      },
    ],
  },
};
