export function createHeader() {
  const header = document.createElement("header");

  const nav = document.createElement("nav");

  const ul = document.createElement("ul");

  const navItems = ["Home", "Projects", "About", "Contact"];

  navItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    ul.className = "nav";
    a.className = "navItem";
    a.textContent = item;
    a.href = `#${item.toLowerCase()}`;
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  header.appendChild(nav);

  return header;
}
