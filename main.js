const options = document.getElementsByClassName("option");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-link_items");
const langSet = document.querySelector(".langSet");
const navSelect = document.querySelector(".nav-select");
const list = document.querySelector(".nav-select-options");
const arrowUpDown = document.querySelector(".arrowUpDown");

const text = document.querySelector(".select_text");
// const hide = document.querySelector(".hide");

// toggle select list
navSelect.onclick = function () {
  list.classList.toggle("hide");
  arrowUpDown.classList.toggle("rotate");
};

// select option urdu english arabic
for (option of options) {
  option.onclick = function () {
    langSet.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowUpDown.classList.toggle("rotate");
    // console.log("click");
  };
}

// mobile menu
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
// close menu when click on link items

const navLink = document.querySelectorAll(".link_items");
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// window.addEventListener("resize", imageHeight);
// function imageHeight() {
//   console.log("t");
//   let parentHeight = document.querySelector(".header-img").offsetHeight;
//   document.getElementsByClassName("header_img").style.height =
//     document.querySelector(".header-img").offsetHeight + 90;
// }
