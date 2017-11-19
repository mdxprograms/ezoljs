# Ezol.js

[ezoljs](https://www.npmjs.com/package/ezoljs)

### Installation

```bash
npm i --save ezoljs
```

### Description

This library is highly inspired by elm's html + view implementation.
Similarly in Ezol, each element is dynamically created to be used as a first class function.

_This is WIP at the moment_.

### Example

```javascript
const Ezol = require("ezoljs");
const ezol = new Ezol();

const {
  div, nav, ul, li, a
} = ezol;

const links = [
  {
    text: "Ezol",
    attrs: {
      className: "navbar__menu-item-link active",
      href: "/"
    }
  },
  {
    text: "Fork Me",
    attrs: {
      className: "navbar__menu-item-link",
      href: "https://github.com/mdxprograms/ezoljs",
      target: "_blank"
    }
  }
];

const navView = () => nav({ className: "navbar" }, "", [linksView(links)]);

const linksView = links =>
  ul(
    { className: "navbar__menu" },
    "",
    links.map(link =>
      li({ className: "navbar__menu-item" }, "", [a(link.attrs, link.text, [])])
    )
  );

// basic view example
const appView = () => div({ id: "app" }, "", [navView()]);

ezol.attach(appView(), "body");
```

#### Todos

- [ ] migrate code to es6 format
- [x] add elements dictionary to dynamically create all html elements
- [x] add exports
- [ ] formalize tests
