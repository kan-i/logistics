const createCards = function ({
    id,
    title,
    img,
    imgMin,
    price
}) {
    let card = `
    <div class="services-item hidden animate__animated">
        <button id="${id}" class="services-item_btn">Подробнее</button>
        <picture>
            <source srcset="${img}" media="(min-width: 414px)">
            <img src="${imgMin}" alt="${name}" class="services-item_img">
        </picture> 
        
        <footer class="services-item-footer">
            <h3 class="services-item_title animate__animated animate__bounceInUp">${title}</h3>
            <span class="services-item_price">0т ${price} руб.</span>
        </footer>
    </div>
    `
    document.querySelector('.services-items').insertAdjacentHTML('beforeend', card);

}

export default createCards;