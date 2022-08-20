const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 615) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});
