import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { ContextMenu } from '../'

import 'bulma/css/bulma.css'
import './styles.css'

const App = () => {
  const containerRef = React.useRef(null)
  const items = [
    {
      children: 'Click me!',
      className: 'bar',
    },
    {
      children: 'No, click me!',
      onClick: () => console.log('you clicked me!'),
    },
  ]

  return (
    <div className="container">
      <button className="button is-primary" ref={containerRef}>
        Right click me!
      </button>
      <ContextMenu target={containerRef} items={items} itemClassName="foo" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
