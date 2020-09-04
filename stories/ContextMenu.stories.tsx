import React from 'react'
import { ContextMenu, ContextMenuProps } from '../'

export default {
  title: 'Context Menu',
}

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = (props?: Partial<ContextMenuProps>) => {
  const containerRef = React.useRef(null)
  const items = [
    {
      children: 'Click me!',
    },
  ]

  return (
    <div ref={containerRef}>
      Right click me!
      <ContextMenu target={containerRef} items={items} {...props} />
    </div>
  )
}
