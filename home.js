let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerActive = document.querySelector(".hamburger-element");
  const hamburgerClose = document.querySelector(".mobile-list");
  const xIcon = document.querySelector(".xIcon");
  hamburgerClose.style.display = "none";
  hamburgerActive.addEventListener("click", function () {
    hamburgerClose.style.display = "block";
    document.body.style.overflow = "hidden";
  });
  xIcon.addEventListener("click", function () {
    hamburgerClose.style.display = "none";
    document.body.style.overflow = "unset";
  });
});
const userProfileDesktop = document.querySelector(".user-profile-desktop");
