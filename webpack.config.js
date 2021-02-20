var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/Elevator/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'
      }
    ]
  }
};