import render from './app'

if (process.env.NODE_ENV === 'development') {
  globalThis.__DEV__ = true
}

render()
