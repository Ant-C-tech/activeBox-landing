//Анимация кнопки меню

$(document).ready(function () {
    $('#header__menuIcon').click(function () {
        $(this).toggleClass('open');
    });
});

//Выпадение бургер-меню

$(function () {

    $('#header__menuIcon').on('click', function () {

        $('.header__menu').slideToggle(300, function () {

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }

        });

    })

});

// Запуск анимации team по скроллу

$(function () {
    var colegue1 = $(".team__pic1"),
    colegue2 = $(".team__pic2"),
    colegue3 = $(".team__pic3"),
    colegue4 = $(".team__pic4");

    $(window).scroll(function () {
        $('#team').each(function () {
            var cPos3 = $(this).offset().top,
                topWindow3 = $(window).scrollTop();

            if (cPos3 < topWindow3 + 700) {
                colegue1.removeClass("opacity"),
                colegue1.addClass("opacity1"),
                setTimeout(function () {
                    colegue2.removeClass("opacity"),
                    colegue2.addClass("opacity1");
                }, 500),
                setTimeout(function () {
                    colegue3.removeClass("opacity"),
                    colegue3.addClass("opacity1");
                }, 1000),
                setTimeout(function () {
                    colegue4.removeClass("opacity"),
                    colegue4.addClass("opacity1");
                }, 1500);
                
            }
        });
    });
});

// Swiper slider

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },  
      lazy: {
        loadPrevNext: true,
      },

    })
  });