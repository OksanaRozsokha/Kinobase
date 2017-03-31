
$(document).ready(function() {


    //menu on click
    let flagMenu = true;

    $('.menu').on('click', function (e) {
        e.stopPropagation();
        if(flagMenu) {
            flagMenu = false;
            $('.menu-list').slideToggle(function () {
                flagMenu = true;
            });
            $('body').toggleClass('active');
        }
    });
    $('body').on('click', function () {
        $('.menu-list').fadeOut();
        $('body').removeClass()('active');
    });
    $('.menu-list').on('click', function (e) {
        e.stopPropagation();
    });


    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            nav:true
        });
    });

    //outline none
    $('button, a').on('focus', function () {
        $(this).blur();
    });

});