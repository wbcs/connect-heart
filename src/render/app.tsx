import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Header from '@/components/header'

import { Button } from 'antd'

import 'antd/dist/antd.css'

interface IProps {}

const App: React.FC<IProps> = () => {
  const handleClick = () => {
    const noti = new Notification('title', {
      body: 'fuck you'
    })
    noti.onclick = () => {
      console.log('oooo')
    }
  }

  return (
    <div>
      <Header />
      <Button onClick={handleClick}>click me</Button>
    </div>
  )
}

export default () => {
  ReactDOM.render(<App />, document.querySelector('#root'))
}
