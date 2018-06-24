import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// import {  } from './../vendor/TweenMax.min.js';
import {TweenMax, TimelineMax } from 'gsap';

let controller = new ScrollMagic.Controller(),
    book = '.intro__book',
    phone = '.intro__phone',
    pad = '.intro__pad',
    introTween = new TimelineMax(),
    skillsListTween = new TimelineMax(),
    workItem = new TimelineMax()

introTween
  .staggerFromTo(
    [phone, pad, book], 1,
    { x: 400, opacity: 0, delay: .7, ease: Elastic.easeOut},
    {x: 0,  opacity: 1}, 0.3
  )

  .fromTo('.intro__title', .2,
    {y: -100, opacity: 0},
    {y: 0, opacity: 1}
  )

  .staggerFromTo(".feature", .7,
    {opacity: 0, scale:1.3, y: 100},
    {opacity: 1, scale:1, y: 0}, .3
  )

skillsListTween
  .staggerFromTo('.skills-list__item', .5,
    {opacity:0, scale:0},
    {opacity:1, scale:1, ease: Power2.easeIn}, .3
  )


workItem
  .staggerFromTo('.works__item', .8,
    {opacity:0},
    {opacity:1, ease: Power2.easeIn},  .3
  )

let skillsList = new ScrollMagic.Scene({
  triggerElement: ".skills-list",
  triggerHook: .8,
  reverse: false
  // triggerHook: "onLeave"
  })
  .setTween(skillsListTween)
  // .on("enter", function () {t2})
  // .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
  .addTo(controller);

