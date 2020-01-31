import * as React from 'react'
import { Aside, Header, ChatRecord, Edit } from '@/components'

interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div className="body-container">
        <Aside />
        <div className="main-view">
          <ChatRecord />
          <Edit />
        </div>
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
          .main-view {
            flex: 1;
            display: flex;
            flex-direction: column;
            border: 1px solid gray;
          }
        `}
      </style>
    </div>
  )
}

export default App
