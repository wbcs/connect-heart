import * as React from 'react'
import UserCard from './user-card'

const data = [
  {
    id: '1',
    avatar:
      'https://avatars3.githubusercontent.com/u/33517328?s=400&u=825ace2cce87e02a925951a45336ee044eea34b9&v=4',
    name: 'Bruce',
    time: 1577697501589,
    status: false,
    count: 3,
    msg: '234'
  },
  {
    id: '2',
    avatar:
      'https://avatars3.githubusercontent.com/u/33517328?s=400&u=825ace2cce87e02a925951a45336ee044eea34b9&v=4',
    name: 'Bruce',
    time: 1577697501589,
    status: false,
    count: 3,
    msg: '234'
  },
  {
    id: '3',
    avatar:
      'https://avatars3.githubusercontent.com/u/33517328?s=400&u=825ace2cce87e02a925951a45336ee044eea34b9&v=4',
    name: 'Bruce',
    time: 1577697501589,
    status: false,
    count: 3,
    msg: '234'
  },
  {
    id: '4',
    avatar:
      'https://avatars3.githubusercontent.com/u/33517328?s=400&u=825ace2cce87e02a925951a45336ee044eea34b9&v=4',
    name: 'Bruce',
    time: 1577697501589,
    status: false,
    count: 3,
    msg: '234'
  },
  {
    id: '5',
    avatar:
      'https://avatars3.githubusercontent.com/u/33517328?s=400&u=825ace2cce87e02a925951a45336ee044eea34b9&v=4',
    name: 'Bruce',
    time: 1577697501589,
    status: false,
    count: 3,
    msg: '234'
  },
  {
    id: '6',
    avatar:
      'https://avatars3.githubusercontent.com/u/33517328?s=400&u=825ace2cce87e02a925951a45336ee044eea34b9&v=4',
    name: 'Bruce',
    time: 1577697501589,
    status: false,
    count: 3,
    msg: '234'
  }
]

const Aside = () => {
  const [checkedId, setCheckedId] = React.useState<string>()
  const handleClick = e => {
    const { id } = e.currentTarget.dataset
    setCheckedId(id)
  }
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
      <style jsx>
        {`
          aside {
            overflow: scroll;
            min-width: 210px;
            height: 100%;
            border-right: 1px solid #eef;
            user-select: none;
          }
        `}
      </style>
    </aside>
  )
}

export default Aside
