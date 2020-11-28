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


