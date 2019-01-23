const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/app.js'),
  output: {
    path: path.resolve(__dirname, '../js'),
    publicPath: 'js/',
    filename: 'app.js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\.spec\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              "presets": [
                [
                  "@babel/preset-env"
                ]
              ]
            }
          }
        ]
      }
    ]
  }
}
