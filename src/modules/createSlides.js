const createSlides = function ({
    id,
    title,
    descr
}) {
    let slide = `
        <div class="hero-slider_slide">
            <div class="cta">
                <h2 class="dnone cta_title animate__animated animate__fadeInUp animate__delay-1s">${title}</h2>
                <p class="dnone cta_descr animate__animated animate__fadeInUp animate__delay-2s">${descr}</p>
                <button id="${id}" class="dnone cta_btn button btn-calc animate__animated animate__fadeInUp animate__delay-3s">Заказать перевозку</button>
            </div>
        </div>
        `;
    $('.hero-slider').slick('slickAdd', `${slide}`);
    $('.slick-active .cta .cta_title').removeClass('dnone');
    $('.slick-active .cta .cta_descr').removeClass('dnone');
    $('.slick-active .cta .cta_btn').removeClass('dnone');
}

export default createSlides;