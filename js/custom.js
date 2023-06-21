$(function () {

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        sct > 0 ? $('.Header').addClass('on') : $('.Header').removeClass('on');
    });

    const MainSlide = new Swiper('.MainSlide', {
        loop: true,
        parallax: true,
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        on: {
            slideChangeTransitionStart: function () {
                $('.MainVisual .dots li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        },
    });

    $('.MainVisual .Arrows .left').on('click', function () {
        MainSlide.slidePrev();
    });
    $('.MainVisual .Arrows .right').on('click', function () {
        MainSlide.slideNext();
    });

    $('.MainVisual .dots li').on('click', function () {
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        MainSlide.slideTo(idx);
    });




    const ItmSlide = new Swiper('.itm_slide', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 350,
        speed: 600,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        }
    });
    $('.MainItm .arrows .left').on('click', function () {
        ItmSlide.slidePrev();
    });
    $('.MainItm .arrows .right').on('click', function () {
        ItmSlide.slideNext();
    });


    // 자바스크립트 언어로 작성하는 방법
    // document.querySelector('.MainItm .arrows .left').addEventListener('click',()=> {
    //     ItmSlide.slidePrev();
    // })
});