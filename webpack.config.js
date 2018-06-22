const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src/module')
    ]
  },
  stats: 'verbose',
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
  ],
  serve: {
    hot: false
  }
};