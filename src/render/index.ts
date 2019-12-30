import render from './app'
import 'antd/dist/antd.css'

if (process.env.NODE_ENV === 'development') {
  globalThis.__DEV__ = true
}

render()
