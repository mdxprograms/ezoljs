# Ezol.js

[![NPM](https://nodei.co/npm/ezoljs.png)](https://npmjs.org/package/ezoljs)

### Installation

```bash
npm i --save ezoljs
```

### Description

This library is highly inspired by elm's html + view implementation.
Similarly in Ezol, each element is dynamically created to be used as a first class function.

Each element takes 3 arguments:

```javascript
element({ ...attrs }, "text", [childElements])
```

_This is WIP at the moment_.

### Example

```javascript
const Ezol = require("ezoljs");

// example
const ezol = new Ezol();
const { div, nav, ul, li, a } = Ezol;

// inline styles accepted
const navStyle = `
  background: orange;
  padding: .5rem;
`;

const menuStyle = `
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const linkStyle = `
  color: #fff;
  margin-right: 1.5rem;
  text-decoration: none;
`;

const brandStyle = linkStyle.concat(`
  color: darkslateblue;
  font-size: 2rem;
`);

// link data
const links = [
  {
    text: "Ezol",
    attrs: {
      className: "navbar__menu-item-link active",
      href: "/",
      style: brandStyle
    }
  },
  {
    text: "Fork Me",
    attrs: {
      className: "navbar__menu-item-link",
      href: "https://github.com/mdxprograms/ezoljs",
      target: "_blank",
      style: linkStyle
    }
  }
];

// example event
const doSomething = e => {
  e.target.style.textDecoration = "none";
};

// basic view example
const appView = () =>
  div({ id: "app" }, "", [
    nav(
      {
        id: "navbar",
        style: navStyle,
        onclick: doSomething,
        className: "navbar"
      },
      "",
      [
        ul(
          { style: menuStyle, className: "navbar__menu" },
          "",
          links.map(link =>
            li({ className: "navbar__menu-item" }, "", [
              a(link.attrs, link.text, [])
            ])
          )
        )
      ]
    )
  ]);

ezol.attach(appView(), "body");
```

#### Todos

- [ ] migrate code to es6 format
- [ ] formalize tests
- [x] update examples in readme
- [x] add elements dictionary to dynamically create all html elements
- [x] add exports
