import mixitup from './../vendor/mixitup.js';

let mixer = mixitup('.works', {
  animation: {
    effectsIn: 'fade translateY(-100%)',
    effectsOut: 'translateY(100%)',
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
  }
});

// $('.works__item').hover(
//   function () {
//     $(this).siblings().addClass('is-fade')
//   },
//   function() {
//     $(this).siblings().removeClass('is-fade')
//   }
// )
