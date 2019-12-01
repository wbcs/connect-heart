import * as merge from 'webpack-merge'
import * as WebapckChain from 'webpack-chain'
import common from './common'
import { Configuration } from 'webpack'


const config: WebapckChain = new WebapckChain()

config.mode('production')
  .end()

export default merge(common, config.toConfig()) as Configuration
