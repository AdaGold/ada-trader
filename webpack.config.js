var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: './build',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8081
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    }),
    new DashboardPlugin()
  ]
};
