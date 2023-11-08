window.addEventListener('DOMContentLoaded', () => {
//Function arguments:
// breakpoint - точка включения слайдера (например max-width: 768px)
// swiperClass - класс инициализации слайдера
// swiperSettings - объект настроек слайдера
//callback - функция, которая будет вызвана после инициализации (не обязательный параметр)
    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint); // переопределяем параметр

        // включаем свайпер
        const enableSwiper = function(className, settings) {
            swiper = new Swiper(className, settings);
            // если передана функция, вызываем ее
            if (callback) {
                callback(swiper);
            }
        }

        const checker = function() {
            // при включении брейкпоинта запускаем enableSwiper()
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                // дестроим свайпер если он был запущен
                if (swiper !== undefined) swiper.destroy(true, true); // (deleteInstance, cleanStyles)
                return;
            }
        };

        breakpoint.addEventListener('change', checker); // при изменении брейкпоинта запускаем checker
        checker();
    }

    // функция, которая будет вызвана после инициализации
    // instance - объект слайдера для взаимодействия
    const someFunc = (instance) => {
        if (instance) {
            instance.on('slideChange', function (e) {
                console.log('*** mySwiper.activeIndex', instance.activeIndex);
            });
        }
    };

    resizableSwiper(
        '(max-width: 768px)',
        '.slider-1',
        {
            loop: true,
            spaceBetween: 32,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        },
        someFunc
    );
});
