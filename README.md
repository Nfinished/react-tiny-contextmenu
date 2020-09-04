# react-tiny-contextmenu

[![npm version](https://img.shields.io/npm/v/react-tiny-contextmenu.svg?style=flat)](https://www.npmjs.com/package/react-tiny-contextmenu)

TinyContextMenu is a lightweight component for overriding default context menu (right click) functionality on an element.

### Install

```console
yarn add react-tiny-contextmenu
```

## API:

**target** : React.refObject\<HtmlElement>
<br/>A React ref to attach the context menu to.

---

**items** : React.ComponentWithoutRef<'span'>[]
<br/>A list of objects representing the context menu's options. Accepts all props that a span would.

---

---

**children** : React.ReactNode
<br/>Instead of passing in a list of items, roll your own content.

---

**className** : string
<br/>ClassNames to be applied to the context menu's container element.

---

**itemClassName** : string
<br/>ClassNames to be applied to each item element. Applied _before_ any classNames provided per-item.

---

## Example usage:

```tsx
import { ContextMenu } from "react-tiny-contextmenu"

const items = [
  {
    children: 'One Button',
  },
  {
    children: (
      <>
        <button>two</button>
        <button>button</button>
      </>
    ),
  },
  {
    children: 'Red Button',
    className: 'red-button'
  },
  {
    children: 'Blue Button',
    style: { background: 'blue' }
  },
]

...

<span ref={contextMenuContainerRef}>right click me!</span>
<ContextMenu target={contextMenuContainerRef} items={items} className="context-menu-example" />
```
