/* Global Variables */
const navigation = document.getElementById('nav-items');
const sections = document.querySelectorAll('section');

const rootElement = document.documentElement;
const navlinks = document.querySelectorAll('.nav-link');
const mainHeader = document.querySelector('.main-header');
const body = document.body;
const services = document.querySelector('#services');
let contact = document.querySelector('#contact');
const pageSection = document.querySelectorAll('.page-section');
const scrollUp = document.querySelector('.scroll-to-top');
let hasScrolled;

// Dynamically Builds Navigation
const createNav = () => {
  let navContainer = '';
  sections.forEach(section => {
    const sectionId = section.id;
    const sectionData = section.dataset.nav;

    navContainer += `<li class="nav-item"><a class="nav-link" href="#${sectionId}">${sectionData}</a></li>`;
  });

  // Adds the elements to the navbar
  navigation.innerHTML = navContainer;
};

createNav();

let inViewport = function (el) {
  let bounding = el.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

window.addEventListener('scroll', function (event) {
  let mainNav = document.querySelector('.main-nav')
}, false);

/* Smooth Scroll Function
  - This function scrolls to section of the Landing Page respective to the clicked navbar link 
*/
function smoothScroll(event) {
  event.preventDefault();
  const section = this.getAttribute('href');

  document.querySelector(section).scrollIntoView({
    behavior: 'smooth'
  }, false);
}

for (const navlink of navlinks) {
  navlink.addEventListener('click', smoothScroll);
}

/* Scroll-To-Top Function 
  - This function reveals the scroll to top button when you've scroll through 90% of the total page height.
*/
function handleScroll() {
  document.addEventListener('scroll', handleScroll)
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal) > 0.90) {
    scrollUp.classList.add('reveal');
  } else {
    scrollUp.classList.remove('reveal');
  }
}

document.addEventListener('scroll', handleScroll)

/* checkView function.
- This function checks to see that an element is in the viewport
 */
function checkView() {
  let inView = function (el) {
    let bounding = el.getBoundingClientRect();
    return (
      bounding.top <= 0 &&
      // bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  window.addEventListener('scroll', function (event) {
    for (let i = 0; i < navlinks.length; i++) {
      if (inView(about)) {
        navlinks[i].classList.add('active');
      } else {
        navlinks[i].classList.remove('active');
      }
    }
  }, false);
};

// checkView();

// The following set of functions reveal and remove the nav respective to scrolling action
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

function isActive(event) {
  this.classList.add('active');
}

console.log('viewport width = ' + window.innerWidth);
console.log('viewport height = ' + window.innerHeight);

// for (i = 0; i < navlinks.length; i++) {
//   navlinks[i].classList.add('active');
// }


