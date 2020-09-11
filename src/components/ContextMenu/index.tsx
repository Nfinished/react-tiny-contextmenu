import React from 'react'
import { useOnClickOutside } from '../../hooks'

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

  const [style, setStyle] = React.useReducer<React.Reducer<React.CSSProperties, React.CSSProperties>>(
    (s, p) => Object.assign({}, s, p),
    propStyle || {},
  )

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
    window.addEventListener('blur', hideMenu)
    return () => {
      document.removeEventListener('scroll', hideMenu)
      window.removeEventListener('blur', hideMenu)
    }
  }, [hideMenu])

  if (!showMenu) return null
  else
    return (
      <div ref={ref} className={`_rtcm ${className}`} style={style} onClick={onClick} {...rest}>
        {children ||
          items!.map(({ className, ...rest }, index) => (
            <span key={index} className={`_rtcm-item ${itemClassName} ${className}`} {...rest} />
          ))}
      </div>
    )
}
