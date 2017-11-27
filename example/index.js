const Ezol = require("../src/ezol.js");

// example
const ezol = new Ezol();
const div = Ezol.div;
const nav = Ezol.nav;
const ul = Ezol.ul;
const li = Ezol.li;
const a = Ezol.a;

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
