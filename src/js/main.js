import {checkUpToggle, toggleMainMenu, indexCheckHeaderTop,
    addControlToCorsineGoods} from './functions';
import WOW from 'wow.js';

const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

if(!isIE11) {
  let animationOffset = 0;
  if(screen.width <= 1200) {
    animationOffset = 200;
  }

  const wow = new WOW(
    {
      offset:   animationOffset,
      mobile:   true,
      live:     true,
      duration: 2000
    }
  );
  wow.init();
}

if(document.querySelectorAll('.btn_disabled').length !== 0) {
  document.querySelector('.btn_disabled').addEventListener('click', function(e) {
    e.preventDefault();
  });
}

document.querySelector('.menu-toggle').addEventListener('click', function() {
  toggleMainMenu();
});

window.addEventListener('scroll', () => {
  checkUpToggle();
});

indexCheckHeaderTop();
window.addEventListener('scroll', () => {
  indexCheckHeaderTop();
});

addControlToCorsineGoods();
