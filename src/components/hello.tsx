import * as React from 'react'

interface IProps {
  text: string
}

export default function(props: IProps) {
  return <div>Hello {props.text}!</div>
}
