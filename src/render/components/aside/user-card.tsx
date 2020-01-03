import * as React from 'react'
import { Avatar, Badge } from 'antd'

interface IProps {
  id: string
  avatar: string
  name: string
  msg: string
  time: number
  count: number
  status: boolean
  checked: boolean
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const UserCard: React.SFC<IProps> = ({
  id,
  avatar,
  name,
  msg,
  // time,
  count,
  checked,
  onClick
}) => {
  return (
    <div
      className={`user-card ${checked ? 'checked' : ''}`}
      data-id={id}
      onClick={onClick}
    >
      <Avatar src={avatar} />
      <Badge
        count={count}
        overflowCount={99}
        offset={[-10, 30]}
        style={{ transform: 'scale(0.8)' }}
      >
        <div className="msg-block">
          <div className="title">
            <span>{name}</span>
            <span>商务10:55</span>
          </div>
          <div className="msg">{msg}</div>
        </div>
      </Badge>
      <style jsx global>
        {`
          .user-card .ant-badge {
            flex: 1;
          }
        `}
      </style>
      <style jsx>
        {`
          .checked {
            transition: background 0.3s;
            background: #eee;
          }
          .user-card {
            display: flex;
            align-items: center;
            padding: 1em 0.5em 1em 1em;
          }
          .msg-block {
            padding: 0.2em 0.5em;
          }
          .title {
            display: flex;
            justify-content: space-between;
          }
          .title span:first-child {
            color: black;
          }
          .title span:last-child {
            margin-right: 1em;
            font-size: 0.7em;
          }
          .msg {
            width: 95%;
            max-width: 240px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  )
}

export default UserCard
