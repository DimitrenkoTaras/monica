$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header-menu-bot-list').click(function(event) {
        $('.header__burger, .header-menu').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.posts-slider').slick({
        slidesToShow:4,
        speed:800,
        responsive:[
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow:3,
                }
            },{
                breakpoint: 767.98,
                settings: {
                    slidesToShow:2,
                }
            },{
                breakpoint: 520,
                settings: {
                    slidesToShow:1,
                }
            }
        ],       
    });
});