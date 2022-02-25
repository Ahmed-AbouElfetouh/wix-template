// Change Navbar Color On Scroll
let myNav = document.querySelector('.navbar');
window.onscroll = function () {
  if (scrollY >= 80) {
    if (myNav.classList.contains('style')) {
    } else {
      myNav.classList.add('style');
    }
  } else {
    myNav.classList.remove('style');
  }
};

// Create Tabs
const allLinks = document.querySelectorAll('.tabs-list ul li');
const divsContent = document.querySelectorAll('.tabs-content > div');

allLinks.forEach((link) => {
  link.addEventListener('click', () => {
    allLinks.forEach((link) => {
      link.classList.remove('active');
    });
    link.classList.add('active');

    divsContent.forEach((div) => {
      div.style.display = 'none';
    });
    document.querySelector(link.dataset.content).style.display = 'block';
  });
});

// Scroll To Top
let myBtn = document.querySelector('.footer .scroll-top');
myBtn.onclick = function () {
  scroll({
    top: 0,
    behavior: 'smooth',
  });
};
