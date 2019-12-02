import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Hello from '@/components/hello'

import './index.less'

interface IProps {}

class App extends React.Component<IProps, {}> {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    var a = '2'
    return (
      <div className="a">
        oo0 <Hello text="Electron" />
      </div>
    )
  }
}

export default () => {
  ReactDOM.render(<App />, document.querySelector('#root'))
}
