import * as merge from 'webpack-merge'
import * as WebpackChain from 'webpack-chain'
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin'
import * as FriendlyErrorsWebapckPlugin from 'friendly-errors-webpack-plugin'
import base from './base'
import { Configuration } from 'webpack'

const config: WebpackChain = new WebpackChain()

config
  .mode('development')
  .stats('none')
  .end()

config.plugin('min-cess-extract-plugin')
  .use(MiniCssExtractPlugin, [{
    filename: '[css]/[name].css',
  }])
  .end()

config.plugin('friendly-errors-webpack-plugin')
  .use(FriendlyErrorsWebapckPlugin, [{
    compilationSuccessInfo: {
      messages: ['You application is running here http://localhost:8080'],
      notes: ['Some additional notes to be displayed upon successful compilation']
    },
    clearConsole: true,
  }])
  .end()

export default merge(base, config.toConfig()) as Configuration
