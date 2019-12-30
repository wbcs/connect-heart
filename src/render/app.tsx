import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Aside, Header, Chat } from '@/components'

interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div className="body-container">
        <Aside />
        <Chat />
      </div>
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
}

export default () => {
  ReactDOM.render(<App />, document.querySelector('#root'))
}
