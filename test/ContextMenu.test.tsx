import React from 'react'

import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ContextMenu } from '../src'

const Wrapper = () => {
  const containerRef = React.useRef(null)
  const items = [
    {
      children: 'Click me!',
      'data-testid': 'menu-item',
    },
  ]

  return (
    <>
      <div ref={containerRef} data-testid="wrapper">
        Right click me!
      </div>
      <ContextMenu target={containerRef} data-testid="menu" items={items} />
      <button data-testid="away">away</button>
    </>
  )
}

const renderAndOpen = () => {
  const renderData = render(<Wrapper />)
  fireEvent.contextMenu(screen.getByTestId('wrapper'))

  return renderData
}

const expectUnmounted = () => {
  expect(screen.queryByTestId('menu')).toBeNull()
}

afterEach(cleanup)

describe('Context Menu', () => {
  describe('Mounting', () => {
    it('should mount on right click', () => {
      const { baseElement } = render(<Wrapper />)

      expectUnmounted()

      fireEvent.contextMenu(screen.getByTestId('wrapper'))

      expect(screen.getByTestId('menu')).toBeInTheDocument()

      expect(baseElement).toMatchSnapshot()
    })
  })

  describe('Unmounting', () => {
    beforeEach(() => {
      renderAndOpen()
    })

    // it('should unmount on click away', () => {
    //   fireEvent.click(screen.getByTestId('away'))

    //   expectUnmounted()
    // })

    it('should unmount on blur', () => {
      fireEvent.blur(window)

      expectUnmounted()
    })
  })

  describe('Children', () => {
    it('should have one', () => {
      renderAndOpen()

      expect(screen.getByTestId('menu-item')).toBeInTheDocument()
    })

    it('should unmount after clicking one', () => {
      renderAndOpen()

      fireEvent.click(screen.getByTestId('menu-item'))

      expectUnmounted()
    })
  })
})
