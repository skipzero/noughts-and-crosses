const extractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');

const PATH = {
  app: path.resolve(__dirname, 'src/'),
  build: path.resolve(__dirname, 'dist/'),
}

const extractSASS = new extractTextPlugin(`${PATH.build}/css/[name].scss`);
const extractCSS = new extractTextPlugin(`${PATH.build}/css/[name].css`);

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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'source-map',
      },
    ],

    loaders: [
      // styleLoaders,
      {
        test: /\.css$/,
        loader: extractCSS.extract('style', 'css?sourceMap', 'resolve-url', 'sass?sourceMap'),
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
        test: /\.jsx?$/im,
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
  plugins: [
    // extractSASS,
    // extractCSS,
  ]
};

module.exports = config;
