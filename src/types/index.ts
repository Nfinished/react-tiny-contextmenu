export interface ContextMenuProps extends React.ComponentPropsWithoutRef<'div'> {
  target: React.RefObject<HTMLElement>
  items?: React.ComponentPropsWithoutRef<'span'>[]
  itemClassName?: string
}
