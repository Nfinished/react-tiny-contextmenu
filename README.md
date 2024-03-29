# react-tiny-contextmenu

A super tiny, fully typed, zero dependency context menu.

[![npm version](https://img.shields.io/npm/v/react-tiny-contextmenu?style=flat-square)](https://www.npmjs.com/package/react-tiny-contextmenu)
[![npm license](https://img.shields.io/npm/l/react-tiny-contextmenu?style=flat-square)](https://github.com/Nfinished/react-tiny-contextmenu/blob/master/LICENSE)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-tiny-contextmenu?style=flat-square)](https://bundlephobia.com/result?p=react-tiny-contextmenu)
[![Code Climate coverage](https://img.shields.io/codeclimate/coverage/Nfinished/react-tiny-contextmenu?style=flat-square)](https://codeclimate.com/github/Nfinished/react-tiny-contextmenu)

![usage gif](https://i.imgur.com/ZWpEUS1.gif)

## API:

**target** : `React.refObject<HtmlElement>`
<br/>A React ref to attach the context menu to.

---

**items** : `React.ComponentWithoutRef<'span'>[]`
<br/>A list of objects representing the context menu's options. Accepts all props that a span would.

---

**children** : `React.ReactNode`
<br/>Instead of passing in a list of items, roll your own content. Takes priority over items.

---

**className** : `string`
<br/>ClassNames to be applied to the context menu's container element.

---

**itemClassName** : `string`
<br/>ClassNames to be applied to each item element. Applied _before_ any classNames provided per-item.

---

## Usage:

```tsx
import { ContextMenu } from 'react-tiny-contextmenu'

const contextMenuContainerRef = React.useRef(null)
const items = [
  {
    children: 'One Button',
  },
  {
    children: (
      <div>
        <button>two</button>
        <button>button</button>
      </div>
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
<ContextMenu target={contextMenuContainerRef} items={items} />
```
