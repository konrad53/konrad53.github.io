const navSlide = () => {
  const mmenu = document.querySelector(".m-menu");
  const nav = document.querySelector("nav ul");
  const navLinkSlide = document.querySelectorAll("nav li");

  mmenu.addEventListener("click", () => {
    nav.classList.toggle("m-menu-active");

    mmenu.classList.toggle("toggle");
  });
};

navSlide();
