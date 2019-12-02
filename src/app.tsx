import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Hello from '@/components/hello'

import './index.less'

interface IProps {}

const App: React.SFC<IProps> = ({}) => {
  var a = '2'
  return (
    <div className="a">
      oo0 <Hello text="Electron" />
    </div>
  )
}

export default () => {
  ReactDOM.render(<App />, document.querySelector('#root'))
}
