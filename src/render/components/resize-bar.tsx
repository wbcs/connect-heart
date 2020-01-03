import * as React from 'react'

interface IProps {
  onResize: () => void
}

const ResizeBar: React.SFC<IProps> = ({ onResize }) => {
  const handleMouseDown = () => {
    onResize
  }
  const handleMouseUp = () => {}

  return (
    <div
      className="resize-bar"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <style jsx>
        {`
          .resize-bar {
            position: absolute;
            top: 0;
            right: 0;
            width: 2px;
            height: 100%;
            background: purple;
            cursor: col-resize;
          }
        `}
      </style>
    </div>
  )
}

export default ResizeBar
