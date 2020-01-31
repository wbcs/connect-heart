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
              <Avatar src="https://pic2.zhimg.com/v2-084ee842527ce35ae5424c81c6bce094_im.jpg" />
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
