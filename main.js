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

// Close the menu with the Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

// Say hello (only the home page has this form)
const form = document.querySelector(".hello-form");

if (form) {
  form.addEventListener("submit", (event) => {
    // Stop the form from reloading the page
    event.preventDefault();
    const name = form.elements.name.value.trim();

    if (name) {
      alert(`שלום, ${name}! מיאו 🐾`);
    } else {
      alert("מיאו? צריך לכתוב שם קודם 🙂");
    }
  });
}
