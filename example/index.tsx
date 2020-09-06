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
    },
    {
      children: 'No, click me!',
    },
  ]

  return (
    <div className="container">
      <button className="button is-primary" ref={containerRef}>Right click me!</button>
      <ContextMenu target={containerRef} items={items} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
