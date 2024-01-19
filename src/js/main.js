import MainSlider from './modules/sliders/sliderMain';
import VideoPlayer from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({btns: '.next', page: '.page'});
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});