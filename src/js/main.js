import MainSlider from './modules/sliders/sliderMain';
import MiniSlider from './modules/sliders/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';


window.addEventListener('DOMContentLoaded', () => {
    new MainSlider({btns: '.next', container: '.page'}).render();

    new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    }).init();

new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    }).init();

    new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    }).init();

    new VideoPlayer('.showup .play', '.overlay').init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();

});