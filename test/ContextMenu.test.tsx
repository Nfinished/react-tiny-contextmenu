import React from 'react'

import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ContextMenu, ContextMenuProps } from '../src'

type WrapperProps = Partial<Omit<ContextMenuProps, 'target'>>
const Wrapper: React.FC<WrapperProps> = overrides => {
  const props = {
    target: React.useRef(null),
    items: [
      {
        children: 'Click me!',
        'data-testid': 'menu-item',
      },
    ],
    ...overrides,
  }

  return (
    <div data-testid="container">
      <div ref={props.target} data-testid="target">
        Right click me!
      </div>
      <ContextMenu data-testid="menu" {...props} />
    </div>
  )
}

const renderAndOpen = (props: WrapperProps = {}) => {
  const renderResult = render(<Wrapper {...props} />)
  fireEvent.contextMenu(screen.getByTestId('target'))

  return renderResult
}

const expectUnmounted = () => {
  expect(screen.queryByTestId('menu')).toBeNull()
}

afterEach(cleanup)

describe('Context Menu', () => {
  describe('Mounting', () => {
    it('should mount on right click', () => {
      render(<Wrapper />)

      expectUnmounted()

      fireEvent.contextMenu(screen.getByTestId('target'))

      expect(screen.getByTestId('menu')).toBeInTheDocument()
    })
  })

  describe('Unmounting', () => {
    beforeEach(() => {
      renderAndOpen()
    })

    // COMBAK: something's super funky about clicking outside in a test env
    it.skip('should unmount on click outside', () => {
      fireEvent.click(document)

      expectUnmounted()
    })

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

    it('should prefer rendering children over a items', () => {
      renderAndOpen({ children: <div>child</div> })

      expect(screen.getByText('child')).toBeInTheDocument()
    })
  })
})
