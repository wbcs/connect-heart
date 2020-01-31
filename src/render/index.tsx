import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app'

if (process.env.NODE_ENV === 'development') {
  globalThis.__DEV__ = true
}

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.querySelector('#root')
)
