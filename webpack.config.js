const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/sideEffects.js',
  output: {
    filename: 'sideEffects.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src/module')
    ]
  },
  stats: 'normal',
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};