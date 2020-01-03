import * as React from 'react'

interface IProps {}

const ChatRecord: React.SFC<IProps> = ({}) => {
  return (
    <div className="chat-record-block">
      hehe
      <style jsx>
        {`
          .chat-record-block {
            flex: 1;
            overflow: auto;
          }
        `}
      </style>
    </div>
  )
}

export default ChatRecord
