const path = require('path'); // The path module provides utilities for working with file and directory paths

module.exports = {
  devtool: 'source-map',
  entry: {
    'js/app.js': './app/src/entry.js', // scripts
    'css/main.css': './assets/scss/main.scss' //styles
  },
  output: {
    path: __dirname + '/build/',
    filename: "[name]"
  },
  watch: true,
  mode: 'development', // mode can be 'development', 'production' or 'none'. 'production' mode enables compressing for output file
  entry: './src/index.js', // An entry point indicates which module webpack should use to begin building
  output: { // The output property tells webpack where to emit the bundles it creates and how to name these files
    filename: 'main.js', // output.filename tells webpack the name of our bundle
    path: path.resolve(__dirname, 'dist') // output.path tells webpack where we want our bundle to be emitted to
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    ]
  },
};