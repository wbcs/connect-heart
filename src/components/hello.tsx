import * as React from 'react'

interface IProps {
  text: string
}

export default function(props: IProps) {
  let {text} = props
  return <div>Hello {text}!</div>
}
