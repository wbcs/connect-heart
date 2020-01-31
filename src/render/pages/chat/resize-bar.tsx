import React, { useEffect, useCallback } from 'react'

interface IProps {
  onResize: (e: MouseEvent) => void
}

const ResizeBar: React.SFC<IProps> = ({ onResize }) => {
  const handleWindowMouseMove = useCallback(onResize, [])
  const handleMouseDown = () =>
    window.addEventListener('mousemove', handleWindowMouseMove)
  useEffect(() => {
    const handleWindowMouseUp = () =>
      window.removeEventListener('mousemove', handleWindowMouseMove)
    window.addEventListener('mouseup', handleWindowMouseUp)
    return () => window.removeEventListener('mouseup', handleWindowMouseUp)
  }, [])

  return (
    <div className="resize-bar" onMouseDown={handleMouseDown}>
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
