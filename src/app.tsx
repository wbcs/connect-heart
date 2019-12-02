import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Hello from '@/components/hello'

import './index.less'

interface IProps {}

class App extends React.Component<IProps, {}> {
  componentDidMount() {
    this.test()
  }
  test = () => {
    console.log('test')
  }
  render() {
    let a = '2'
    let obj = {
      b: 1,
      awadj: 'wefw'
    }

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
