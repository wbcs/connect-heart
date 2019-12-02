import * as path from 'path'
import * as WebapckChain from 'webpack-chain'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {
  Configuration as IConfiguration
} from 'webpack'

const __DEV__ = process.env.NODE_ENV === 'development'

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
  .rule('images')
  .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
  .use('url-loader')
    .loader('url-loader')
    .options({
      limit: 1024,
      name: 'images/[name].[hash:7].[ext]'
    })
    .end()

/**
 * svg不适用inline
 * inline的svg会破坏svg片段标识符，它被用在雪碧图当中
 */
config.module
  .rule('svg')
  .test(/\.svg$/)
  .use('file-loader')
    .loader('file-loader')
    .options({
      name: 'images/[name].[hash:7].[ext]'
    })
    .end()

config.module
  .rule('less')
  .test(/\.(less|css)$/)
  .use('mini-css-extract-loader')
    .loader(__DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader)
    .end()
  .use('css-loader')
    .loader('css-loader')
    .end()
  .use('less-loader')
    .loader('less-loader')
    .end()

config.module
  .rule('compile')
  .test(/\.(tsx|jsx|ts|js)$/)
  .pre()
  .include
    .add(path.resolve(__dirname, '../src'))
    .end()
  .use('babel')
  .loader('babel-loader')
  .end()

config.plugin('html-webpack-plugin')
  .use(HtmlWebpackPlugin, [{
    template: path.resolve(__dirname, '../public/index.html')
  }])
  .end()

config.resolve
  .alias
    .set('@', path.resolve(__dirname, '../src'))
    .end()
  .extensions
    .add('.tsx')
    .add('.ts')
    .add('.jsx')
    .add('.js')
    .end()

export default config.toConfig() as IConfiguration
