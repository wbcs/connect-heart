import * as React from 'react'

interface IProps {}

const Edit: React.SFC<IProps> = ({}) => {
  return (
    <div className="edit-block">
      edit
      <style jsx>
        {`
          .edit-block {
            height: 200px;
          }
        `}
      </style>
    </div>
  )
}

export default Edit
