let lastScroll = 0;
const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 50) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0";
  }

  hero.style.opacity = 1 - currentScroll / 400;

  lastScroll = currentScroll;
});
