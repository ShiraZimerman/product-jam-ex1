// Mobile menu
const nav = document.querySelector(".site-nav");
const openButton = document.querySelector(".menu-open");
const closeButton = document.querySelector(".menu-close");

function setMenuOpen(isOpen) {
  nav.classList.toggle("is-open", isOpen);
  openButton.setAttribute("aria-expanded", isOpen);
}

openButton.addEventListener("click", () => setMenuOpen(true));
closeButton.addEventListener("click", () => setMenuOpen(false));

// Say hello
const form = document.querySelector(".hello-form");

form.addEventListener("submit", (event) => {
  // Stop the form from reloading the page
  event.preventDefault();
  const name = form.elements.name.value.trim();
  alert(`שלום, ${name}`);
});
