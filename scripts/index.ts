import * as path from 'path'
import * as WebapckChain from 'webpack-chain'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import {
  Configuration
} from 'webpack'

const config: WebapckChain = new WebapckChain()

config
  .context(path.resolve(__dirname, '../'))
  .entry('app')
  .add('./src/index.ts')
  .end()

config.output
  .path(path.resolve(__dirname, '../dist'))
  .filename('[name].[hash].js')
  .end()

config.module
  .rule('compile')
  .test(/\.(tsx)|(jsx)|(ts)|(js)$/)
  .pre()
  .include
    .add(path.resolve(__dirname, '../src'))
    .end()
  .use('babel')
  .loader('babel-loader?cacheDirectory=true')
  .end()

config.plugin('html-webpack-plugin')
  .use(HtmlWebpackPlugin, [{
    template: path.resolve(__dirname, '../public/index.html')
  }])
  .end()


config.resolve
  .alias
    .set('@', path.resolve(__dirname, 'src'))
    .end()
  .extensions
    .add('.tsx')
    .add('.ts')
    .add('.jsx')
    .add('.js')
    .end()

export default config.toConfig() as Configuration