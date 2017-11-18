# Ezol.js

### Installation

```bash
npm i --save ezoljs
```

### Description

This library is highly inspired by elm's html + view implementation.
Similarly in Ezol, each element is dynamically created to be used as a first class function.

_This is WIP at the moment_.

@NOTE: Currently only the example elements are available.
I will be adding a dictionary to dynamically create the remaining html elements.

### Example

```javascript
const ezol = new Ezol();
const div = Ezol.div;
const nav = Ezol.nav;
const ul = Ezol.ul;
const li = Ezol.li;
const a = Ezol.a;

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
- [ ] add elements dictionary to dynamically create all html elements
- [ ] add exports
- [ ] formalize tests
