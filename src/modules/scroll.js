const scroll = () => {

    window.addEventListener('scroll', function () {
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;


        if (windowScroll > 100 && document.documentElement.clientWidth > 414) {
            document.querySelector('.about_figure-lines--top').querySelector('.mask').style.animation = 'dash 2s linear forwards';
            setTimeout(() => {
                document.querySelector('.about_img').classList.add('animate__fadeIn');
            }, 1500);
            setTimeout(() => {
                document.querySelector('.about_title').classList.add('animate__fadeInUp');
            }, 2000);
            setTimeout(() => {
                document.querySelector('.about_descr--first').classList.add('animate__fadeInUp');
            }, 3000);
            setTimeout(() => {
                document.querySelector('.about_descr--second').classList.add('animate__fadeInUp');
            }, 4000);

            // for tablet
            document.querySelector('.about_lines').querySelector('.mask').style.animation = 'dash 5s linear forwards';
            // end 

        }
        if (windowScroll > 700 && document.documentElement.clientWidth > 414) {
            document.querySelector('.about_figure-lines--bottom').querySelector('.mask').style.animation = 'dash 2s linear forwards';
            setTimeout(() => {
                document.querySelector('.about_btn').classList.add('animate__flash');
            }, 2000);
        }
        if (windowScroll > 800) {
            document.querySelector('.about-text-lines').querySelector('.mask').style.animation = 'dash 3s linear forwards';
            // for tablet
            document.querySelector('.about-text-lines--tablet').querySelector('.mask').style.animation = 'dash 3s linear forwards';
            // end 
        }
        if (windowScroll > 1050 && document.documentElement.clientWidth > 768 && document.documentElement.clientWidth > 414) {
            document.querySelector('.features-items_lines').querySelectorAll('.mask').forEach(item => {
                item.style.animation = 'dash 3s linear forwards';
            })
            document.querySelectorAll('.features-item').forEach(item => {
                item.classList.add('animate__fadeIn');
            })

        }

        if (windowScroll > 1500 && document.documentElement.clientWidth > 768) {
            document.querySelector('.features-text_lines--bottom').querySelector('.mask').style.animation = 'dash 3s linear forwards';
            document.querySelector('.services_title').classList.add('animate__fadeInDown')
            document.querySelectorAll('.services-item').forEach((item, index) => {
                if (index == 0) {
                    item.classList.add('animate__delay-1s');
                }
                if (index == 1) {
                    item.classList.add('animate__delay-2s');
                }
                if (index == 2) {
                    item.classList.add('animate__delay-3s');
                }
                item.classList.add('animate__fadeIn');
            });
        }

        if (windowScroll > 1250 && document.documentElement.clientWidth > 414) {
            document.querySelector('.features-text_lines--top').querySelectorAll('.mask').forEach(item => {
                item.style.animation = 'dash 3s linear forwards';
            })
            document.querySelector('.features_title').classList.add('animate__fadeInUp');
            document.querySelector('.features_descr').classList.add('animate__fadeInUp');

        }

        if (windowScroll > 2000 && document.documentElement.clientWidth > 768) {
            document.querySelector('.services-items_lines').querySelector('.mask').style.animation = 'dash 3s linear forwards';
            document.querySelector('.services_btn').classList.add('animate__flash');
        }
        if (windowScroll > 2300 && document.documentElement.clientWidth > 768) {
            document.querySelector('.services_btn-lines').querySelector('.mask').style.animation = 'dash 3s linear forwards';
            document.querySelector('.comments_title').classList.add('animate__fadeInUp');
            document.querySelector('.comments_subtitle').classList.add('animate__fadeInUp');
            document.querySelector('.comments-slide_img').classList.add('animate__fadeInDown');
            document.querySelector('.comments-slide-wrap').classList.add('animate__fadeInUp');
            document.querySelector('.comments-slider').querySelector('.hero-arrow--prev').classList.add('animate__fadeInLeft');
            document.querySelector('.comments-slider').querySelector('.hero-arrow--next').classList.add('animate__fadeInRight');

        }
        if (windowScroll > 3000 && document.documentElement.clientWidth > 768) {
            document.querySelector('.comments_lines').querySelector('.mask').style.animation = 'dash 3s linear forwards';
            document.querySelector('.contacts_lines').querySelectorAll('.mask').forEach(item => {
                item.style.animation = 'dash 3s linear forwards';
            })
            document.querySelector('.contacts_title').classList.add('animate__fadeInUp');
            document.querySelectorAll('.input-wrap').forEach(item => {
                item.classList.add('animate__fadeInLeft');
            });
            document.querySelector('.textarea-wrap').classList.add('animate__fadeInRight');
            setTimeout(() => {
                document.querySelector('.contacts-form_btn').classList.add('animate__flash');
            }, 3000);

        }

        // for tablet 
        if (windowScroll > 1050 && document.documentElement.clientWidth <= 768) {
            document.querySelector('.features-text_lines--tablet').querySelector('.mask').style.animation = 'dash 3s linear forwards';

        }

        if (windowScroll > 1100 && document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth > 414) {
            document.querySelector('.features_title').classList.add('animate__fadeInUp');
            document.querySelector('.features_descr').classList.add('animate__fadeInUp');

            document.querySelector('.features-items .features-item:nth-child(1)').classList.remove('animate__delay-4s');
            document.querySelector('.features-items .features-item:nth-child(1)').classList.add('animate__delay-1s');

            document.querySelector('.features-items .features-item:nth-child(2)').classList.remove('animate__delay-1s');
            document.querySelector('.features-items .features-item:nth-child(2)').classList.add('animate__delay-2s');

            document.querySelector('.features-items .features-item:nth-child(3)').classList.remove('animate__delay-3s');
            document.querySelector('.features-items .features-item:nth-child(3)').classList.add('animate__delay-4s');

            document.querySelector('.features-items .features-item:nth-child(4)').classList.remove('animate__delay-2s');
            document.querySelector('.features-items .features-item:nth-child(4)').classList.add('animate__delay-3s');

        }

        if (windowScroll > 1250 && document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth > 414) {
            document.querySelectorAll('.features-item').forEach(item => {
                item.classList.add('animate__fadeIn');
            })
            document.querySelector('.features-items_lines--tablet').querySelectorAll('.mask').forEach(item => {
                item.style.animation = 'dash 3s linear forwards';
            })
        }

        if (windowScroll > 1800 && document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth > 414) {
            document.querySelector('.features_lines').querySelector('.mask').style.animation = 'dash 3s linear forwards';
            document.querySelector('.services_title').classList.add('animate__fadeInDown');
        }

        if (windowScroll > 2000 && document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth > 414) {
            document.querySelectorAll('.services-item').forEach((item, index) => {
                if (index == 0) {
                    item.classList.add('animate__delay-1s');
                }
                if (index == 1) {
                    item.classList.add('animate__delay-2s');
                }
                if (index == 2) {
                    item.classList.add('animate__delay-3s');
                }
                item.classList.add('animate__fadeIn');
            });
        }

        if (windowScroll > 2100 && document.documentElement.clientWidth <= 768) {
            document.querySelector('.services-items_lines--tablet').querySelectorAll('.mask').forEach(item => {
                item.style.animation = 'dash 3s linear forwards';
            });
        }

        if (windowScroll > 2600 && document.documentElement.clientWidth <= 768) {
            document.querySelector('.services-items_lines').querySelector('.mask').style.animation = 'dash 3s linear forwards';
            document.querySelector('.services-items_lines').querySelector('#services-items-line').setAttribute('d', 'M120 1 V 69 H 200');
            document.querySelector('.services_btn').classList.add('animate__flash');
        }

        if (windowScroll > 2900 && document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth > 414) {
            document.querySelector('.services_btn-lines--tablet').querySelectorAll('.mask').forEach(item => {
                item.style.animation = 'dash 3s linear forwards';
            });
            document.querySelector('.comments_title').classList.add('animate__fadeInUp');
            document.querySelector('.comments_subtitle').classList.add('animate__fadeInUp');
            document.querySelector('.comments-slide_img').classList.add('animate__fadeInDown');
            document.querySelector('.comments-slide-wrap').classList.add('animate__fadeInUp');
            document.querySelector('.comments-slider').querySelector('.hero-arrow--prev').classList.add('animate__fadeInLeft');
            document.querySelector('.comments-slider').querySelector('.hero-arrow--next').classList.add('animate__fadeInRight');

        }

        if (windowScroll > 3680 && document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth > 414) {
            document.querySelector('.comments_lines').querySelector('.mask').style.animation = 'dash 3s linear forwards';
            document.querySelector('.contacts_lines').querySelectorAll('.mask').forEach(item => {
                item.style.animation = 'dash 3s linear forwards';
            })
            document.querySelector('.contacts_lines--tablet').querySelector('.mask').style.animation = 'dash 3s linear forwards';
            document.querySelector('.contacts_title').classList.add('animate__fadeInUp');
            document.querySelectorAll('.input-wrap').forEach(item => {
                item.classList.add('animate__fadeInLeft');
            });
            document.querySelector('.textarea-wrap').classList.add('animate__fadeInRight');
            setTimeout(() => {
                document.querySelector('.contacts-form_btn').classList.add('animate__flash');
            }, 3000);
        }

        // for mobile 
        if (windowScroll > 250 && document.documentElement.clientWidth <= 414) {
            setTimeout(() => {
                document.querySelector('.about_title').classList.add('animate__fadeInUp');
            }, 500);
            setTimeout(() => {
                document.querySelector('.about_descr--first').classList.add('animate__fadeInUp');
            }, 1000);
            setTimeout(() => {
                document.querySelector('.about_descr--second').classList.add('animate__fadeInUp');
            }, 1500);
        }

        if (windowScroll > 900 && document.documentElement.clientWidth <= 414) {
            document.querySelector('.features_title').classList.add('animate__fadeInUp');
            document.querySelector('.features_descr').classList.add('animate__fadeInUp');
        }

        if (windowScroll > 1310 && document.documentElement.clientWidth <= 414) {

            document.querySelector('.features-items .features-item:nth-child(1)').classList.remove('animate__delay-4s');
            document.querySelector('.features-items .features-item:nth-child(1)').classList.add('animate__fadeInLeft');

        }

        if (windowScroll > 1500 && document.documentElement.clientWidth <= 414) {

            document.querySelector('.features-items .features-item:nth-child(2)').classList.remove('animate__delay-1s');
            document.querySelector('.features-items .features-item:nth-child(2)').classList.add('animate__fadeInRight');

        }

        if (windowScroll > 1630 && document.documentElement.clientWidth <= 414) {

            document.querySelector('.features-items .features-item:nth-child(3)').classList.remove('animate__delay-3s');
            document.querySelector('.features-items .features-item:nth-child(3)').classList.add('animate__fadeInLeft');
        }

        if (windowScroll > 1820 && document.documentElement.clientWidth <= 414) {
            document.querySelector('.features-items .features-item:nth-child(4)').classList.remove('animate__delay-2s');
            document.querySelector('.features-items .features-item:nth-child(4)').classList.add('animate__fadeInRight');

        }

        if (windowScroll > 2100 && document.documentElement.clientWidth <= 414) {
            document.querySelector('.services_title').classList.add('animate__fadeInDown');
        }

        if (windowScroll > 2150 && document.documentElement.clientWidth <= 414) {
            document.querySelectorAll('.services-item').forEach((item, index) => {
                if (index == 0) {
                    item.classList.add('animate__delay-1s');
                    item.classList.add('animate__fadeIn');
                }
            });
        }

        if (windowScroll > 2450 && document.documentElement.clientWidth <= 414) {
            document.querySelectorAll('.services-item').forEach((item, index) => {
                if (index == 1) {
                    item.classList.add('animate__delay-2s');
                    item.classList.add('animate__fadeIn');
                }
            });
        }

        if (windowScroll > 2750 && document.documentElement.clientWidth <= 414) {
            document.querySelectorAll('.services-item').forEach((item, index) => {
                if (index == 2) {
                    item.classList.add('animate__delay-3s');
                    item.classList.add('animate__fadeIn');
                }
            });
        }

        if (windowScroll > 3250 && document.documentElement.clientWidth <= 414) {
            document.querySelector('.comments_title').classList.add('animate__fadeInUp');
            document.querySelector('.comments_subtitle').classList.add('animate__fadeInUp');
        }

        if (windowScroll > 3450 && document.documentElement.clientWidth <= 414) {
            document.querySelector('.comments-slide_img').classList.add('animate__fadeInDown');
            document.querySelector('.comments-slide-wrap').classList.add('animate__fadeInUp');
            document.querySelector('.comments-slider').querySelector('.hero-arrow--prev').classList.add('animate__fadeInLeft');
            document.querySelector('.comments-slider').querySelector('.hero-arrow--next').classList.add('animate__fadeInRight');

        }

        if (windowScroll > 3950 && document.documentElement.clientWidth <= 414) {
            document.querySelector('.contacts_title').classList.add('animate__fadeInUp');
        }

        if (windowScroll > 4000 && document.documentElement.clientWidth <= 414) {
            document.querySelectorAll('.input-wrap').forEach(item => {
                item.classList.add('animate__fadeInLeft');
            });

        }

        if (windowScroll > 4350 && document.documentElement.clientWidth <= 414) {
            document.querySelector('.textarea-wrap').classList.add('animate__fadeInRight');
            document.querySelector('.textarea-wrap').classList.remove('animate__delay-2s');
        }



    });


}

export default scroll;