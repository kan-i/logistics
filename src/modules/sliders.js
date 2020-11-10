const sliders = () => {

    const heroSlider = $('.hero-slider');
    const commentsSlider = $('.comments-slider');
    let currSlide = 0;
    let nextSlide = 0;

    heroSlider.slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: `<div class="hero-arrow hero-arrow--prev">
                    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 1L1 6.5L6.5 12" />
                    </svg>
                </div>`,
        nextArrow: `<div class="hero-arrow hero-arrow--next">
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12L6.5 6.5L1 1" />
                    </svg>
                </div>`
    });

    commentsSlider.slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: `<div class="hero-arrow hero-arrow--prev hidden animate__animated animate__delay-4s">
                    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 1L1 6.5L6.5 12" />
                    </svg>
                </div>`,
        nextArrow: `<div class="hero-arrow hero-arrow--next hidden animate__animated animate__delay-4s">
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12L6.5 6.5L1 1" />
                    </svg>
                </div>`
    });

    heroSlider.on('afterChange', function (event, slick, currentSlide) {
        nextSlide = currentSlide;
        if (nextSlide !== currSlide) {
            $('.slick-active .cta .cta_title').removeClass('animate__fadeInUp');
            $('.slick-active .cta .cta_descr').removeClass('animate__fadeInUp');
            $('.slick-active .cta .cta_btn').removeClass('animate__fadeInUp');
        }
    });

    heroSlider.on('setPosition', function (event, slick, currentSlide) {
        if (nextSlide !== currSlide) {

            const title = $('.slick-active .cta .cta_title');
            const descr = $('.slick-active .cta .cta_descr');
            const btn = $('.slick-active .cta .cta_btn');

            title.removeClass('dnone');
            title.addClass('animate__fadeInUp animate__delay-1s');
            title.removeClass('animate__fadeOutDown');

            descr.removeClass('dnone');
            descr.addClass('animate__fadeInUp animate__delay-2s');
            descr.removeClass('animate__fadeOutDown');

            btn.removeClass('dnone');
            btn.addClass('animate__fadeInUp animate__delay-3s');
            btn.removeClass('animate__fadeOutDown');


        }
    });

    heroSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        currSlide = currentSlide;

        const title = $('.slick-active .cta .cta_title');
        const descr = $('.slick-active .cta .cta_descr');
        const btn = $('.slick-active .cta .cta_btn');

        title.removeClass('animate__fadeInUp animate__delay-1s');
        title.addClass('animate__fadeOutDown');

        descr.removeClass('animate__fadeInUp animate__delay-2s');
        descr.addClass('animate__fadeOutDown');

        btn.removeClass('animate__fadeInUp animate__delay-3s');
        btn.addClass('animate__fadeOutDown');

    });

}

export default sliders;