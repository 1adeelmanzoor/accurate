const options = document.getElementsByClassName("option");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-link_items");
const langSet = document.querySelector(".langSet");
const navSelect = document.querySelector(".nav-select");
const list = document.querySelector(".nav-select-options");
const arrowUpDown = document.querySelector(".arrowUpDown");
const bgColor = document.querySelector(".main-role-manage-container");

const text = document.querySelector(".select_text");

const content = document.querySelectorAll(" .main-role-manage-content");
const roleOwnDiv = document.querySelectorAll(".main-role-manage-own");

// attendance tab

function openAttendance(evt, roleName, color, br) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("main-role-manage-content");
  for (i = 0; i < 4; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("role-own");
  for (i = 0; i < 4; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
    tablinks[i].style.borderColor = br;
  }
  bgColor.style.backgroundColor = color;
  document.getElementById(roleName).style.display = "flex";
  evt.currentTarget.classList.add("active");
}

// lesson planner

// function openLessonPlaner(evt, roleName, color, br) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("LPC");
//   for (i = 0; i < 4; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("Lesson-Planner");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace("activel", "");
//     debugger;
//     tablinks[i].style.borderColor = br;
//   }
//   bgColor.style.backgroundColor = color;
//   document.getElementById(roleName).style.display = "flex";
//   evt.currentTarget.classList.add("activel");
// }

// roleOwn.forEach((tab, index) => {
//   tab.addEventListener("click", () => {
//     content.forEach((cont) => {
//       cont.classList.remove("active-content");
//     });
//     roleOwn.forEach((tab) => {
//       tab.classList.remove("active");
//     });

//     content[index].classList.add("active-content");
//     roleOwn[index].classList.add("active");
//   });
// });

// test start

// function toggleItem(elem) {
//   for (var i = 0; i < 4; i++) {
//     elem[i].addEventListener("click", function (e) {
//       for (var i = 0; i < 4; i++) {}
//       e.preventDefault();
//     });
//   }
// }
// toggleItem(document.querySelectorAll(".role-own"));

// test end

// console.log(roleOwn);
// console.log(content);

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

// bgColor.addEventListener("click", function (e) {
//   if (e.target.classList.contains("role-own")) {
//     debugger;
//     roleOwnDiv.style.backgroundColor = "red";

//     // let buttonText = e.target.innerText;
//     // e.target.classList.toggle(buttonText)
//   }
// });
