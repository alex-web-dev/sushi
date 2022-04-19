import './main';
import './corsine';

window.addEventListener('load', function() {
  const preload = document.querySelector('.preload')
  if (preload) {
    preload.classList.add('preload_hide');
  }
  
  setTimeout(() => {
    if (window.pageYOffset < 200) {
      window.scrollTo(0,0);
    }
  }, 50);
});

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    const blockID = anchor.getAttribute('href');
    if(blockID.includes('/')) {
      return;
    }
    
    e.preventDefault();

    const blockOffsetTop = document.querySelector(blockID).getBoundingClientRect().top;
    window.scrollBy({ top: (blockOffsetTop), left: 0, behavior: 'smooth' });
  })
}

const navMenuLinks = document.querySelectorAll('.nav-menu__link');
navMenuLinks.forEach(function(menuLink) {
  menuLink.addEventListener('click', function() {
    const navMenuActive = document.querySelector('.nav-menu_active');

    if(window.innerWidth > 568 || !navMenuActive) {
      return;
    }
    
    navMenuActive.classList.remove('nav-menu_active');
  });
});