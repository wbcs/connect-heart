import React, { useRef, useEffect } from 'react'
import dragableFallback from '@/utils/dragable'

interface IProps {}

const Header: React.FC<IProps> = () => {
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    dragableFallback(ref.current)
  })

  return <div ref={ref}>header</div>
}

export default Header
