
  function toggleNav() {
    const navLinks = document.querySelector(".nav_links");
    const burger = document.querySelector(".burger");
    navLinks.style.display = navLinks.style.display === "none" ? "block" : "none";
    burger.classList.toggle("change");
  }

  toggleNav();