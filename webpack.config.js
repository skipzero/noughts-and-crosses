const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'dist/')
const APP_DIR = path.resolve(__dirname, 'src/')

const sassLoaders = [
  'css-Loader',
  'postcss-loader',
  `sass-loader?indentedSyntax=sass&includePaths[]=${APP_DIR}`
]

const config = {
  entry: {
    app: [`${APP_DIR}/index`]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },

      {
        test: /\.js?/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      },

      {
        test: /\/.sass?/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },

  eslint: {
    configFile: './.eslintrc.js'
  },

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
}

module.exports = config
