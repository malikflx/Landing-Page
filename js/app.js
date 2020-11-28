// const landingTitle = document.querySelector('.landing-title-content');

// const bounding = landingTitle.getBoundingClientRect();

// console.log(bounding);

/* Smooth Scroll Function
  - This function scrolls to section of the Landing Page respective to the clicked navbar link 
*/

const navlinks = document.querySelectorAll('.nav-link');
const mainHeader = document.querySelector('.main-header');
const body = document.body;
let hasScrolled;

window.addEventListener('scroll', function (event) {
  hasScrolled = false;
});

setInterval(function () {
  if (!hasScrolled) {
    hideNav();
    console.log('yup, you scrolled');
    hasScrolled = true;
  } else if (hasScrolled) {
    revealNav();
  }
}, 150);

function hideNav() {
  mainHeader.classList.add('close');
};

function revealNav() {
  mainHeader.classList.remove('close');
}

// window.onscroll = function (event) {
//   hasScrolled = true;
//   console.log('you have scrolled');
// };

// setInterval(function () {
//   if (hasScrolled) {
//     changeNav();
//     hasScrolled = false;
//   }
// }, 1000);

// function changeNav() {

// };

// window.onscroll = function (event) {
//   hasScrolled = true;
//   if (hasScrolled === true) {
//     mainHeader.classList.toggle('.main-header');
//     console.log('you just scrolled');
//     hasScrolled = false;
//   };
// };

// let scrollAction = setTimeout(function () {
//   if (hasScrolled === true) {
//     mainHeader.classList.add('close');
//     console.log('you scrolled homie!');
//     hasScrolled = false;
//     window.clearTimeout(hasScrolled);
//   }
// }, 1000);
// let navBar = setTimeout(function () {
//   mainHeader.classList.toggle('close');
// }, 1000);

// window.addEventListener('scroll', function (e) {
//   window.clearTimeout(hasScrolled);
//   hasScrolled = setTimeout(function () {
//     mainHeader.classList.toggle('close');
//     console.log('yo, you scrolled son!');
//   }, 1000);
// }, false);

function smoothScroll(event) {
  event.preventDefault();
  const section = this.getAttribute('href');

  document.querySelector(section).scrollIntoView({
    behavior: 'smooth'
  });
}

for (const navlink of navlinks) {
  navlink.addEventListener('click', smoothScroll);
}


