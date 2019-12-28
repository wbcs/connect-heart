import * as React from 'react'
import { Avatar, Icon, Row, Col } from 'antd'

interface IProps {}

const Header: React.FC<IProps> = () => {
  return (
    <div className="avatar-block">
      <Row>
        <Col span={8}>header</Col>
        <Col span={8} style={{ textAlign: 'center' }}>
          <div className="icon-container">
            <Avatar icon={<Icon type="bell" theme="twoTone" />} />
            <Avatar icon={<Icon type="bell" theme="twoTone" />} />
          </div>
        </Col>
        <Col span={8} style={{ textAlign: 'right' }}>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Col>
      </Row>
      <style jsx>
        {`
          .avatar-block {
            -webkit-app-region: drag;
            -webkit-user-select: none;
            padding: 0.8em 0;
            background-color: #eee;
          }
          .icon-container {
            display: inline-flex;
            justify-content: space-between;
            width: 100%;
            max-width: 150px;
          }
        `}
      </style>
    </div>
  )
}

export default Header
