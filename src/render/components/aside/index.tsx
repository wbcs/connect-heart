import * as React from 'react'
import UserCard from './user-card'
import ResizeBar from '../resize-bar'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => ({
  id: String(num),
  avatar:
    'https://avatars3.githubusercontent.com/u/33517328?s=400&u=825ace2cce87e02a925951a45336ee044eea34b9&v=4',
  name: 'Bruce' + num,
  time: 1577697501589,
  status: false,
  count: num,
  msg: '234'
}))

const Aside = () => {
  const [checkedId, setCheckedId] = React.useState<string>()
  const handleClick = e => {
    const { id } = e.currentTarget.dataset
    setCheckedId(id)
  }
  const handleResize = () => {}
  return (
    <aside>
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
            height: 100%;
            min-width: 230px;
            overflow: scroll;
            user-select: none;
          }
        `}
      </style>
    </aside>
  )
}

export default Aside
