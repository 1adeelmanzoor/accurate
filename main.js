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

  document.querySelector("#amContainer").style.backgroundColor = color;
  document.getElementById(roleName).style.display = "flex";
  evt.currentTarget.classList.add("active");
}
// lesson planner
function openLessonPlaner(evt, roleName, color, br) {
  var i, lptabcontent, lptablinks;
  lptabcontent = document.getElementsByClassName("LPC");
  for (i = 0; i < 4; i++) {
    lptabcontent[i].style.display = "none";
  }
  lptablinks = document.getElementsByClassName("Lesson-Planner");
  for (i = 0; i < lptablinks.length; i++) {
    lptablinks[i].className = lptablinks[i].className.replace("activel", "");
    lptablinks[i].style.borderColor = br;
  }
  document.querySelector("#lpContainer").style.backgroundColor = color;
  document.getElementById(roleName).style.display = "flex";
  evt.currentTarget.classList.add("activel");
}
// Fee Management
function openFeeManagement(evt, roleName, color, br) {
  var i, fmtabcontent, fmtablinks;
  fmtabcontent = document.getElementsByClassName("FMC");
  for (i = 0; i < 4; i++) {
    fmtabcontent[i].style.display = "none";
  }
  fmtablinks = document.getElementsByClassName("Fee-Management");
  for (i = 0; i < fmtablinks.length; i++) {
    fmtablinks[i].className = fmtablinks[i].className.replace("activefm", "");
    fmtablinks[i].style.borderColor = br;
    debugger;
  }
  document.querySelector("#fmContainer").style.backgroundColor = color;
  document.getElementById(roleName).style.display = "flex";
  evt.currentTarget.classList.add("activefm");
}
//Event Management
// function openLessonPlaner(evt, roleName, color, br) {
//   var i, lptabcontent, lptablinks;
//   lptabcontent = document.getElementsByClassName("LPC");
//   for (i = 0; i < 4; i++) {
//     lptabcontent[i].style.display = "none";
//   }
//   lptablinks = document.getElementsByClassName("Lesson-Planner");
//   for (i = 0; i < lptablinks.length; i++) {
//     lptablinks[i].className = lptablinks[i].className.replace("activel", "");
//     lptablinks[i].style.borderColor = br;
//   }
//   document.querySelector("#lpContainer").style.backgroundColor = color;
//   document.getElementById(roleName).style.display = "flex";
//   evt.currentTarget.classList.add("activel");
// }
// Exam Planner
// function openLessonPlaner(evt, roleName, color, br) {
//   var i, lptabcontent, lptablinks;
//   lptabcontent = document.getElementsByClassName("LPC");
//   for (i = 0; i < 4; i++) {
//     lptabcontent[i].style.display = "none";
//   }
//   lptablinks = document.getElementsByClassName("Lesson-Planner");
//   for (i = 0; i < lptablinks.length; i++) {
//     lptablinks[i].className = lptablinks[i].className.replace("activel", "");
//     lptablinks[i].style.borderColor = br;
//   }
//   document.querySelector("#lpContainer").style.backgroundColor = color;
//   document.getElementById(roleName).style.display = "flex";
//   evt.currentTarget.classList.add("activel");
// }

// nav select
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
