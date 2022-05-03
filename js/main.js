window.addEventListener("DOMContentLoaded", () => {
  const header_link_item = document.querySelector(".main_hover");
  const nav = document.querySelector(".navHover");
  const close_nav = document.querySelector(".close__button");
  const header = document.querySelector(".header");

  function toggleActive() {
    nav.classList.toggle("active");
  }
  header_link_item.addEventListener("click", toggleActive);
  close_nav.addEventListener("click", toggleActive);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 100) {
      header.classList.add("header__scroll");
    } else {
      header.classList.remove("header__scroll");
    }
  });
});
