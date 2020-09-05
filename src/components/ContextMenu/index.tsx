import React from 'react'
import { useOnClickOutside } from '../../hooks'
import * as Utils from '../../utils'

import { ContextMenuProps } from '../../types'

import './styles.css'

export const ContextMenu: React.FC<ContextMenuProps> = ({
  target,
  items,
  style: propStyle,
  onClick: propOnClick,
  children,
  className,
  itemClassName,
  ...rest
}) => {
  const ref = React.useRef<HTMLDivElement>(null)

  const [showMenu, setShowMenu] = React.useState(false)

  const [style, setStyle] = React.useReducer<
    React.Reducer<React.CSSProperties, React.CSSProperties>,
    React.CSSProperties | undefined
  >(Utils.merge, propStyle, Utils.defaultTo({}))

  const hideMenu = React.useCallback(() => setShowMenu(false), [])

  useOnClickOutside(ref, hideMenu)

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    hideMenu()
    propOnClick && propOnClick(event)
  }

  const handleContextMenu = React.useCallback((event: MouseEvent) => {
    event.preventDefault()
    const { pageX, pageY } = event
    setStyle({ top: pageY, left: pageX })
    setShowMenu(true)
  }, [])

  React.useEffect(() => {
    const { current: containerElement } = target

    if (containerElement) {
      containerElement.addEventListener('contextmenu', handleContextMenu)
      return () => containerElement.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [target, handleContextMenu])

  React.useEffect(() => {
    document.addEventListener('scroll', hideMenu, true)
    return () => document.removeEventListener('scroll', hideMenu)
  }, [hideMenu])

  if (!showMenu) return null
  else
    return (
      <div
        ref={ref}
        className={Utils.joinClassNames(['context-menu', className])}
        style={style}
        onClick={onClick}
        {...rest}
      >
        {children ||
          items!.map(({ className, ...rest }, index) => (
            <span
              key={index}
              className={Utils.joinClassNames(['context-menu-item', itemClassName, className])}
              {...rest}
            />
          ))}
      </div>
    )
}
