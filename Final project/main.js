'use strict';

/**
 * Navbar Toggle
 */

// Selecting elements
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

// Storing navigation elements in an array
const navElems = [overlay, navOpenBtn, navCloseBtn];

// Adding click event listeners to navigation elements
for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    // Toggling 'active' class on navbar and overlay
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * Header & Go Top Button - Active on Page Scroll
 */

// Selecting elements
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

// Adding scroll event listener to the window
window.addEventListener("scroll", function () {
  // Checking if the window's scroll position is greater than or equal to 80 pixels
  if (window.scrollY >= 80) {
    // Adding 'active' class to header and go top button
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    // Removing 'active' class from header and go top button
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
