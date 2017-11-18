// example
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
