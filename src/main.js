import './styles/reset.css';
import './styles/lines.css';
import './styles/styles.css';


import './styles/sass/footer.sass';
import './styles/sass/header.sass';
import './styles/sass/hero.sass';
import './styles/sass/info.sass';
import './styles/sass/main.sass';
import './styles/sass/menu-btn.sass';
import './styles/sass/modals.sass';
import './styles/sass/slick-slider.sass';
import './styles/sass/style.sass';
import './styles/sass/vars.sass';
import './styles/sass/load.sass';



import $ from 'jquery';
import '../node_modules/slick-carousel/slick/slick.min';
import scroll from './modules/scroll';
import getData from './modules/getData';
import createSlides from './modules/createSlides';
import createCards from './modules/createCards';
import sliders from './modules/sliders';
import setImageHero from './modules/setImageHero';
import openModal from './modules/modals';



window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    setTimeout(() => {
        document.querySelector('.load').classList.add('close');
    }, 0);

    scroll();
    sliders();


    getData('db/slides.json')
        .then(data => {
            data.forEach(createSlides)
            setImageHero(data)

        })

    getData('db/services.json')
        .then(data => {
            data.forEach(createCards)
            openModal(data)

        })



});













