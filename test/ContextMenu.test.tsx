import React from 'react'
import * as ReactDOM from 'react-dom'
import { Default as ContextMenu } from '../stories/ContextMenu.stories'

describe('Context Menu', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ContextMenu />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
