import React from 'react'
import * as ReactDOM from 'react-dom'
import { ContextMenu } from '../'

const Wrapper = () => {
  const containerRef = React.useRef(null)
  const items = [
    {
      children: 'Click me!',
    },
  ]

  return (
    <div ref={containerRef}>
      Right click me!
      <ContextMenu target={containerRef} items={items} />
    </div>
  )
}

describe('Context Menu', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Wrapper />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
