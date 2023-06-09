"use strict";

const header = document.querySelector(".header");
const btnMobile = document.querySelector(".btn-mobile-nav");
const nav = document.querySelector(".main-nav");
const sectionHero = document.querySelector(".section-hero");
const body = document.querySelector("body");
const yearEl = document.querySelector(".year");
const navList = document.querySelector(".main-nav-list");

// Make mobile navigation work
btnMobile.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Set current year
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});

// Sticky navigation
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) body.classList.add("sticky");
  else body.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-80px`,
});

headerObserver.observe(sectionHero);
