var HtmlWebpackPlugin = require('html-webpack-plugin');
var mui = require('material-ui');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    './client/app/index.jsx',
  ],
  output: {
    path: __dirname + '/public',
    filename: "bundle.js",
  },
  module: {
    loaders: [
      { test: /\.jsx$/, include: __dirname + '/client', loader: "babel-loader" },
    ],
  },
  plugins: [HTMLWebpackPluginConfig, mui],
};
