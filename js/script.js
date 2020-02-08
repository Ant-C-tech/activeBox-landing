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