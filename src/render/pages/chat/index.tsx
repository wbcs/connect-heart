import * as React from 'react'
import Aside from './aside'
import ChatRecord from './chat-record'
import Edit from './edit'

interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <React.Fragment>
      <Aside />
      <div className="main-view">
        <ChatRecord />
        <Edit />
      </div>
      <style jsx>
        {`
          .main-view {
            flex: 1;
            display: flex;
            flex-direction: column;
            border: 1px solid gray;
          }
        `}
      </style>
    </React.Fragment>
  )
}

export default App
