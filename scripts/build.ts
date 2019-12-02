import * as merge from 'webpack-merge'
import * as WebapckChain from 'webpack-chain'
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { Configuration } from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import base from './base'

const config: WebapckChain = new WebapckChain()

config.mode('production')
  .end()

config.plugin('min-cess-extract-plugin')
  .use(MiniCssExtractPlugin, [{
    filename: 'css/[name].[hash:7].css',
    chunkFilename: 'css/[name].[hash:7].css',
  }])
  .end()

config.plugin('clean')
  .use(CleanWebpackPlugin)
  .end()

export default merge(base, config.toConfig()) as Configuration
