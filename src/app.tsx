import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface IProps {
}

const App: React.SFC<IProps> = ({}) => {
  return (
    <div>
      hello electron
      <style jsx>
        {`
          div {
            border: 1px solid red;
          }
        `}
      </style>
    </div>
  )
}

export default () => {
  ReactDOM.render(
    <App />,
    document.querySelector('#root')
  )
}
