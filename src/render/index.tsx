import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import Chat from './pages/chat'

if (process.env.NODE_ENV === 'development') {
  globalThis.__DEV__ = true
}

ReactDOM.render(
  <Router>
    <Route path="/" component={Chat} />
  </Router>,
  document.querySelector('#root')
)
