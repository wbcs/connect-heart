import { remote } from 'electron'

export default function dragableFallback(el: HTMLElement) {
  let mouseX = 0
  let mouseY = 0
  const handleWindowMouseMove = (e: MouseEvent) => {
    const { pageX, pageY } = e
    const win = remote.getCurrentWindow()
    const pos = win.getPosition()
    pos[0] = pos[0] + pageX - mouseX
    pos[1] = pos[1] + pageY - mouseY
    win.setPosition(pos[0], pos[1], true)
  }
  el.addEventListener('mousedown', e => {
    mouseX = e.pageX
    mouseY = e.pageY
    window.addEventListener('mousemove', handleWindowMouseMove)
  })
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', handleWindowMouseMove)
  })
}
