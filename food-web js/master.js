ScrollReveal({ distance: "100px" });

ScrollReveal().reveal(
  ".container",
  { delay: 2000 },
  { duration: 3000 },
  { interval: 1000 },
  { origin: "left" },
  { reset: true }
);
ScrollReveal().reveal(
  "img",
  { duration: 2000 },
  {
    rotate: {
      x: 50,
      z: 60,
    },
  }
);

const bars = document.querySelector(".bars");
const navigation = document.querySelector(".navigation");
const nav_links = document.querySelector(".links");
bars.addEventListener("click", () => {
  nav_links.classList.toggle("active");
});
// =======box shadow on scroll======
const header = document.querySelector(".navigation");
function activeShadow() {
  if (scrollY >= 200) {
    header.classList.add("show-shadow");
  } else {
    header.classList.remove("show-shadow");
  }
}
window.addEventListener("scroll", activeShadow);
// ======scroll to top=====
const scroll_top = document.querySelector(".scroll-top");
function showIcon() {
  if (scrollY >= 400) {
    scroll_top.classList.add("show-scroll");
  } 
  else {
    scroll_top.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", showIcon);

scroll_top.addEventListener("click", UpScroll);
function UpScroll() {
  console.log("click");
  return window.scrollTo(0, 0);
}
// =========nav=====
const links = document.querySelectorAll("li a");
links.forEach((link) => {
  link.addEventListener("click", function active_nav() {
    // Remove "active" class from all links
    links.forEach((otherLink) => {
      otherLink.classList.remove("active");
    });

    // Add "active" class to the clicked link
    link.classList.add("active");
  });
});
