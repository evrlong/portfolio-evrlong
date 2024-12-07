// Function to create the burger icon
export function createBurgerIcon() {
  const burgerIcon = document.createElement("div");
  burgerIcon.className = "burgerIcon";

  for (let i = 0; i < 3; i++) {
    const line = document.createElement("div");
    line.className = "burgerLine";
    burgerIcon.appendChild(line);
  }

  // Event listener for toggling the menu
  burgerIcon.addEventListener("click", () => {
    const burgerMeny = document.querySelector(".burgerMeny");
    if (burgerMeny) {
      burgerMeny.classList.toggle("active");
    }
  });

  console.log("Burger icon created.");
  return burgerIcon;
}

// Function to create the burger menu
export function createBurgerMeny() {
  const burgerMeny = document.createElement("div");
  burgerMeny.className = "burgerMeny";

  const nav = document.createElement("nav");
  nav.className = "BurgerNav";

  const ul = document.createElement("ul");
  ul.className = "burgerUl";

  const burgerItems = ["Home", "Projects", "About", "Contact"];

  // Create elements for each item in the menu
  burgerItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "burgerItem";
    a.textContent = item;
    a.href = `#${item.toLowerCase()}`;
    li.appendChild(a);
    ul.appendChild(li);

    // Event listener for closing the menu when an item is clicked
    a.addEventListener("click", () => {
      burgerMeny.classList.remove("active");
    });
  });

  // Assemble the navigation menu
  nav.appendChild(ul);
  burgerMeny.appendChild(nav);

  console.log("Burger menu created.");
  return burgerMeny;
}

// Append the burger icon and menu to the document
const burgerIcon = createBurgerIcon();
document.body.prepend(burgerIcon);

const burgerMeny = createBurgerMeny();
document.body.prepend(burgerMeny);
