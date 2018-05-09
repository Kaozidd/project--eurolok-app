const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,
  entry: "./src/client/js/App.js",
  devtool: "cheap-eveal-source-map",
  output: {
    path: `${__dirname}/public/js`,
    filename: 'bundle.js'
  },
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [
    new BundleTracker({
      filename: './webpack-stats.json'
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'env',
            'es2015',
            'flow', 
            'react',
            'stage-1',
            'stage-2',
            'stage-3'
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '.js', 
      '.json'
    ]
  }
}
