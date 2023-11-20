//-------------------------------- للاطباء 
const doctorspartjava = [...document.querySelectorAll('.doctorspart')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

doctorspartjava.forEach((item, i) => {
    item.scrollLeft = 0;
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

//------------------------------- منيو بار
const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
// Get the navigation links container
const navContainer = document.querySelector('#navlinks');

// Add click event listeners to the menu and close elements
menuBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', hideMenu);

// Function to show the navigation links container
function showMenu() {
  navContainer.style.right = '0';
}
// Function to hide the navigation links container
function hideMenu() {
  navContainer.style.right = '-400px';
}


// Get the element to animate
const aboutanimate = document.querySelector('.about');
const clininanimat = document.querySelector('.clinics');


// Check if the element is in view
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


// Add a scroll event listener to check if the element is in view
window.addEventListener('scroll', function() {
  if (isElementInViewport(aboutanimate)) {
    aboutanimate.classList.add('animate');
  }
});
window.addEventListener('scroll', function() {
  if (isElementInViewport(clininanimat)) {
    clininanimat.classList.add('animate');
  }
});


