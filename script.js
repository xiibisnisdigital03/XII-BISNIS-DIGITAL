// scroll smooth
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// navbar hide / show
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.style.top = "-80px"; // hilang
  } else {
    navbar.style.top = "0"; // muncul
  }

  lastScroll = currentScroll;
});
