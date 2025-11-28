// JS------------------------------
// MENU MOBILE
// ------------------------------
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
});

// Fecha o menu ao clicar em um link
document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });
});


// ------------------------------
// SCROLL SUAVE AO CLICAR NOS LINKS
// ------------------------------
document.querySelectorAll("nav a, #mobile-menu a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: "smooth"
    });
  });
});


// ------------------------------
// ANIMAÇÃO AO ROLAR A PÁGINA (REVEAL EFFECT)
// ------------------------------
const elements = document.querySelectorAll("section, .card");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect().top;

    if (rect < triggerBottom) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();