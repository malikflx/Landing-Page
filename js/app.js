/* Global Variables */
const navigation = document.getElementById('nav-items');
const container = document.querySelector('.container');
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

/* Smooth Scroll Function
  - This function scrolls to section of the Landing Page respective to the clicked navbar link 
*/
function smoothScroll(event) {
  event.preventDefault();
  const link = this.getAttribute('href');

  document.querySelector(link).scrollIntoView({
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

/* Viewport Functions
- This function checks to see that an element is in the viewport
 */
// retrieving the largest value <= number
const positionOffset = (section) => {
  // Returns size and position relative to element
  return Math.floor(section.getBoundingClientRect().top);
};
// remove active class
const removeActiveState = (section) => {
  section.classList.remove('active');
};
// add active class
const addActiveState = (conditional, section) => {
  if (conditional) {
    section.classList.add('active');
  };
};
const isActive = () => {
  sections.forEach(section => {
    const elementOffset = positionOffset(section);
    inViewport = () => elementOffset < 350 && elementOffset >= -350;
    removeActiveState(section);
    addActiveState(inViewport(), section);
  });
};

window.addEventListener('scroll', isActive);

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

console.log('viewport width = ' + window.innerWidth);
console.log('viewport height = ' + window.innerHeight);

/* Collapse
 - This adds functionality to collapse and un-collapse sections.
 */

// function collapseSection() {

// };

// container.addEventListener('click', event => {
//   const upArrow = event.target;
//   const textContent = document.querySelectorAll('.text-content');
//   if (upArrow.classList.contains('fa-chevron-up')) {
//     for (let content of textContent) {

//       console.log(content);
//     }
//   }
// });



// function toggleArrow(upArrow) {
//   upArrow.classList.toggle('collapse');
// };