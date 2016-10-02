// const extractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');

const PATH = {
  app: path.resolve(__dirname, 'src/'),
  build: path.resolve(__dirname, 'dist/'),
}

//  Was going to extract the css... but why for a simple game not going to 'Production'?
// const extractSASS = new extractTextPlugin(`${PATH.build}/css/[name].scss`);
// const extractCSS = new extractTextPlugin(`${PATH.build}/css/[name].css`);

const styleLoaders = [
  'style',
  'css?sourceMap',
  'resolve-url',
  'sass?sourceMap',
];

const config = {
  debug: true,
  entry: [`${PATH.app}/index.js`],
  output: {
    filename: `${PATH.build}/js/bundle.js`,
  },

  devtool: 'source-map',
  module: {
    preLoaders: [
      {
          test: /\.jsx*?$/,
          loader: 'eslint',
          exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'source-map',
      },
    ],

    loaders: [
      // styleLoaders,
      {
        test: /\.css$/,
        loader: styleLoaders,  //  extractCSS.extract('style', 'css?sourceMap', 'resolve-url', 'sass?sourceMap'),
      },

      {
        test: /\.scss$/,
        loaders: styleLoaders,  //   extractSASS.extract('style', 'css?sourceMap', 'resolve-url', 'sass?sourceMap'),
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=8192',
          'img',
        ],
      },

      {
        test: /\.jsx*?$/,
        exclude: /node_modules/,
        loaders: [
          'babel',
        ],
      },
    ],
  },
  devServer: {
    contentBase: './dist',
  },
  eslint: {
      failOnWarning: false,
      failOnError: false,
  },
  plugins: [
    // extractSASS,
    // extractCSS,
  ]
};

module.exports = config;
