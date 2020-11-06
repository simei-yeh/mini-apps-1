const path = require('path');

SRC_DIR = path.join(__dirname, 'client')
DIST_DIR = path.join(__dirname, 'client/dist')


module.exports = {
  mode: "development",

  entry: `${SRC_DIR}/index.jsx`,

  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },

  watch: true,

  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },

  devtool: "source-map",

}