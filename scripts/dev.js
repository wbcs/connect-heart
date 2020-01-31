const merge = require('webpack-merge')
const WebpackChain = require('webpack-chain')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsWebapckPlugin = require('friendly-errors-webpack-plugin')
const base = require('./base')

const config = new WebpackChain()

config
  .mode('development')
  .stats('none')
  .end()

config
  .plugin('min-cess-extract-plugin')
  .use(MiniCssExtractPlugin, [
    {
      filename: '[css]/[name].css'
    }
  ])
  .end()

config
  .plugin('friendly-errors-webpack-plugin')
  .use(FriendlyErrorsWebapckPlugin, [
    {
      compilationSuccessInfo: {
        messages: [
          'You application is running here http://localhost:8080'
        ],
        notes: [
          'Some additional notes to be displayed upon successful compilation'
        ]
      },
      clearConsole: true
    }
  ])
  .end()

module.exports = merge(base, config.toConfig())
