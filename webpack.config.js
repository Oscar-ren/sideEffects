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
          options: {
            presets: [
              ["@babel/preset-env", {
                targets: {
                  ie: 9
                },
                modules: false,
                useBuiltIns: false
              }]
            ],
            plugins: [
              ["@babel/plugin-transform-runtime", {
                "helpers": false,
                "polyfill": false,
                "regenerator": false,
                "useBuiltIns": true
              }]
            ]
          }
        },
        exclude: /node_modules/,

      }
    ]
  },
  plugins: [
  ]
};