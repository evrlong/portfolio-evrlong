import { createHeader } from "./js/header.js";

const header = createHeader();

document.body.prepend(header);

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("header a");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    navLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});
