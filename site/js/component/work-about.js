import modal from '../component/mymodal.js';
import slick from './../vendor/slick';


function showWork() {
  console.log($('.works__list'));
  $('.works__list').on("click", ".works__card", function (e) {
    let n = index.index(this);
    let work = `
    <div class = "work-about row">
      <div class = "work-about__img">
        <div class="slider slider--work">
          ${works[n].screen.map(item => `
            <div class = "slider__item work-about__img-wrap">
              <img src="${item}" alt="">
            </div>
          `)}
        </div>
      </div>
      <div class="work-about__txt">
        <div class = "work-about__title title-small">
          ${works[n].name}
        </div>
        <p>${works[n].desc}</p>
        ${(!works[n].link) ? "" : `
          <div class="btn-wrap">
            <a class="btn" target="_blank" href="${works[n].link}">Посмотреть сайт</a>
          </div>
        `}
      </div>
    </div>
  `;
    modal.open(work);
    $('.slider--work').slick({})
  })
}

let works;
let index = $('.works__list .works__card');

$.getJSON('./../views/data.json', function (data) {
  works = data.works;
  showWork();
});

