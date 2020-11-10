const openModal = (data) => {

    const modalCalc = document.querySelector('.modal-calc'),
        modalCardWrapper = document.querySelector('.modal-card'),
        body = document.querySelector('body'),
        html = document.querySelector('html'),
        modalWrap = document.querySelector('.modal-wrap'),
        modalWrapMenu = document.querySelector('.modal-wrap-menu');
    0

    function createCardModal({
        id,
        title,
        descr,
        img,
        imgMin
    }) {
        let modalCard = `
            <picture class="modal-card_figure">
                <source srcset="${img}" media="(min-width: 414px)">
                <img src="${imgMin}" alt="${name}" class="modal-card_img">
            </picture> 
            <div class="modal-card-text">
                <h3 class="modal-card-text_title">${title}</h3>
                <p class="modal-card-text_descr">${descr}</p>
                <button id="${id}" class="button modal-card-text_btn btn-calc">Заказать</button>
            </div>
        `
        modalCardWrapper.insertAdjacentHTML('beforeend', modalCard);
        modalCalc.style.display = 'none';
    }

    function closeModal() {
        modalWrap.style.backgroundColor = '';
        modalWrap.style.overflowY = '';
        body.classList.remove('stop-scrolling');
        modalWrap.classList.remove('animate__zoomIn');
        modalWrap.classList.add('animate__zoomOut');
        setTimeout(() => {
            modalWrap.style.display = 'none';
        }, 1000);
    }

    function addAnimate() {
        modalCardWrapper.innerHTML = '';

        body.classList.add('stop-scrolling');



        modalWrap.style.display = 'block';
        modalWrap.classList.remove('animate__zoomOut');
        modalWrap.classList.add('animate__zoomIn');
        setTimeout(() => {
            modalWrap.style.backgroundColor = 'rgba(24, 26, 68, 0.95)';
            modalWrap.style.overflowY = 'auto';
        }, 1000);
    }


    document.addEventListener('click', e => {
        if (e.target.closest('.services-item_btn')) {
            let idCard = e.target.closest('.services-item_btn').getAttribute('id');
            let cardData = data.find(el => {
                if (el.id == idCard) {
                    return el;
                }
            });
            addAnimate();
            createCardModal(cardData);
        }
        if (e.target.closest('.btn-calc')) {
            modalCalc.style.display = 'block';
            addAnimate();

        }

        if (e.target.closest('.menu') || e.target.closest('.modal-menu .nav_link')) {
            modalWrapMenu.classList.toggle('open');
            body.classList.toggle('stop-scrolling');
            document.querySelector('.menu').classList.toggle('open');
        }

        if (e.target.closest('.modal_close')) {
            closeModal();
        }


    })


    ////////////////////////////////////////////




}


export default openModal;