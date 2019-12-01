import * as React from 'react'

interface IProps {
  text: string
}

export default function({ text }: IProps) {
  return (
    <div>Hello {text}!</div>
  )
}
