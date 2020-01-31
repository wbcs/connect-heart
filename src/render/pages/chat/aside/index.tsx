import React, { useRef } from 'react'
import UserCard from './user-card'
import ResizeBar from '../resize-bar'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => ({
  id: String(num),
  avatar:
    'https://pic2.zhimg.com/v2-084ee842527ce35ae5424c81c6bce094_im.jpg',
  name: 'Bruce' + num,
  time: 1577697501589,
  status: false,
  count: num,
  msg: '234'
}))

const Aside = () => {
  const asideRef = useRef<HTMLElement>()
  const [checkedId, setCheckedId] = React.useState<string>()
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget.dataset
    setCheckedId(id)
  }
  const handleResize = (e: MouseEvent) => {
    asideRef.current.style.width = `${e.clientX}px`
  }

  return (
    <aside ref={asideRef}>
      {data.map(item => (
        <UserCard
          key={item.id}
          checked={checkedId === item.id}
          {...item}
          onClick={handleClick}
        />
      ))}
      <ResizeBar onResize={handleResize} />
      <style jsx>
        {`
          aside {
            position: relative;
            width: 200px;
            height: 100%;
            min-width: 150px;
            max-width: 300px;
            overflow: scroll;
            user-select: none;
          }
        `}
      </style>
    </aside>
  )
}

export default Aside
