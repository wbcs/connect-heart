const merge = require('webpack-merge')
const WebapckChain = require('webpack-chain')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const base = require('./base')

const config = new WebapckChain()

config.mode('production').end()

config
  .plugin('min-cess-extract-plugin')
  .use(MiniCssExtractPlugin, [
    {
      filename: 'css/[name].[hash:7].css',
      chunkFilename: 'css/[name].[hash:7].css'
    }
  ])
  .end()

config
  .plugin('clean')
  .use(CleanWebpackPlugin)
  .end()

module.exports = merge(base, config.toConfig())
