const path = require('path')
const WebapckChain = require('webpack-chain')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const __DEV__ = process.env.NODE_ENV === 'development'

const config = new WebapckChain()

config
  .context(path.resolve(__dirname, '../'))
  .entry('app')
  .add('./src/render/index.ts')
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
  .include.add(path.resolve(__dirname, '../src/render'))
  .end()
  .use('babel')
  .loader('babel-loader')
  .end()

config
  .plugin('html-webpack-plugin')
  .use(HtmlWebpackPlugin, [
    {
      template: path.resolve(__dirname, '../public/index.html')
    }
  ])
  .end()

config.resolve.alias
  .set('@', path.resolve(__dirname, '../src/render'))
  .end()
  .extensions.add('.tsx')
  .add('.ts')
  .add('.jsx')
  .add('.js')
  .end()

module.exports = config.toConfig()
