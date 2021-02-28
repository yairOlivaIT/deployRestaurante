const hamburger = document.querySelector('#hamburger');

document.addEventListener('DOMContentLoaded', () => {
    hamburger.addEventListener('click', toggleMenu);
})

function toggleMenu() {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
  };
  