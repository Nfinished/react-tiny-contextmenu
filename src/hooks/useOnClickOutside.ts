import React from 'react'

/**
 * @caveat Handler should always be wrapped in useCallback.
 */
export const useOnClickOutside = (ref: React.RefObject<HTMLElement>, handler: Function) => {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendant elements
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
