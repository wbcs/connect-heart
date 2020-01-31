import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from '@/components/header'
import Chat from './pages/chat'

if (process.env.NODE_ENV === 'development') {
  globalThis.__DEV__ = true
}

const App = () => (
  <div className="app">
    <Router>
      <div>
        <Header />
      </div>
      <div className="body-container">
        <Route exact path="/" component={Chat} />
        <Route path="/relation-ship" component={() => <div>fuck</div>} />
      </div>
    </Router>
    <style jsx>
      {`
        .app {
          display: flex;
          flex-direction: column;
          height: 100vh;
          box-sizing: border-box;
        }
        .body-container {
          flex: 1;
          display: flex;
          overflow: auto;
        }
      `}
    </style>
  </div>
)

ReactDOM.render(<App />, document.querySelector('#root'))
