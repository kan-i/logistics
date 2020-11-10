const setImageHero = (data) => {

    const heroSlider = $('.hero-slider'),
        hero = document.querySelector('.hero'),
        heroImage = document.querySelector('.hero-image');

    let imgSlide;
    let coords;
    let bgSize;
    let colorText;
    let curSlide = heroSlider.slick('slickCurrentSlide');
    let idCurSlide = heroSlider.slick('getSlick').$slides.find("button")[curSlide].id;

    data.filter(item => {
        if (item.id.includes(idCurSlide)) {
            imgSlide = item.img;
            coords = item.coords;
            bgSize = item.bgsize;
            colorText = item.colortext;
        }
    })
    hero.style.color = `${colorText}`;
    heroSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        let idCurSlide = heroSlider.slick('getSlick').$slides.find("button")[nextSlide].id;
        data.filter(item => {
            if (item.id.includes(idCurSlide)) {
                imgSlide = item.img;
                coords = item.coords;
                bgSize = item.bgsize;
                colorText = item.colortext;
            }
        })


        // setTimeout(() => {
        //     heroImage.style.background = `url(${imgSlide}) ${coords}/${bgSize} no-repeat`;
        // }, 1500);
        // heroImage.style.background = `url(${imgSlide}) ${coords}/${bgSize} no-repeat`;
        hero.style.color = `${colorText}`;
    })
}

export default setImageHero;