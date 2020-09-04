import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ContextMenu, ContextMenuProps } from '../'

const App = () => {
  const containerRef = React.useRef(null)
  const items = [
    {
      children: 'Click me!',
    },
  ]

  return (
    <>
      <div ref={containerRef}>Right click me!</div>
      <ContextMenu target={containerRef} items={items} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
