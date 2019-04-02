const path = require('path');

module.exports = {
  // where is the base of our app located
  entry: path.resolve(__dirname, 'src/index.jsx'),
  // path: path.join(__dirname, 'dist')
  output: {
    // what we want our bundle to be called
    filename: 'bundle.js',
    // where we want our bundle to live
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      }
    ],
  },
};