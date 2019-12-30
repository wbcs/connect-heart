import * as React from 'react'
import { Avatar, Icon, Row, Col, Badge } from 'antd'

interface IProps {}

const Header: React.FC<IProps> = () => {
  return (
    <header className="header-block">
      <Row>
        <Col span={8}></Col>
        <Col span={8} style={{ textAlign: 'center' }}>
          <div className="icon-container">
            <Avatar icon={<Icon type="bell" theme="twoTone" />} />
            <Avatar icon={<Icon type="bell" theme="twoTone" />} />
          </div>
        </Col>
        <Col span={8} style={{ textAlign: 'right' }}>
          <div className="avatar-block">
            <Badge status="success">
              <Avatar src="https://avatars3.githubusercontent.com/u/33517328?s=400&u=825ace2cce87e02a925951a45336ee044eea34b9&v=4" />
            </Badge>
          </div>
        </Col>
      </Row>
      <style jsx>
        {`
          .header-block {
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
          .avatar-block {
            padding-right: 2em;
          }
        `}
      </style>
    </header>
  )
}

export default Header
