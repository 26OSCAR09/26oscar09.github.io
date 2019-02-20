$(document).ready(function () {
    var $header = $('.header')
    var $nav = $('.navbar')
    var fixed = false;
    var $links = $('.collapse ul a')
    var $links2 = $('.footer a')

    function fixedNav() {
        if (scrollY >= $header.innerHeight() && !fixed) {
            $nav.addClass('fixed-top').css('opacity', 0).animate({
                opacity: 1
            }, 500)
            $('.collapse').css('max-width', '881px')
            $nav.css('justify-content', 'center')
            fixed = true;
        } else if (scrollY < $header.innerHeight() && fixed) {
            $nav.animate({
                opacity: 0
            }, 500, function () {
                $nav.removeClass('fixed-top').css('opacity', 1)
            })
            fixed = false;
        }
    }

    $(window).on('scroll', fixedNav);
    fixedNav()

    $links.click(function (e) {
        e.preventDefault();
        $links.removeClass('active')
        var id = $(this).addClass('active').attr('href');
        var target = $(id).offset().top;

        $('html, body').animate({
            scrollTop: target
        }, 1000)
    })

    $links2.click(function (e) {
        e.preventDefault();
        $links2.removeClass('active')
        var id = $(this).addClass('active').attr('href');
        var target = $(id).offset().top;

        $('html, body').animate({
            scrollTop: target
        }, 1000)
    })

    $(window).scroll(function () {
        var scroll = $(this).scrollTop();

        $links.each(function () {
            var target = $(this).attr('href');
            var selector = $(target).offset().top;

            if (scroll >= selector) {
                $links.removeClass('active')
                $(this).addClass('active')
            }
        })
    })

    $('.sd').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $('.footer').offset().top
        }, 1000)
    })

    
/* MAKC */
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        variableWidth: true
    })
/* MAKC */


    // var j = 0; //количество прокручивания счетчика при скролле 
    // $(document).on('scroll', function () {
    //     if (j < 1) {
    //         if ($(window).scrollTop() >= $('.mobile').offset().top - 200) {
    //             count('.clients', 3400, 3587, '');
    //             count('.coffee', 100, 207, '');
    //             count('.blog', 2300, 2500, '');
    //             count('.likes', 700, 873, '');
    //             count('.launched', 750, 900, '');
    //             j++;
    //         }
    //     }
    // });
    // //счетчик крутится один раз и не реагирует на скролл

    // function count(selector, min, max, sign) {
    //     let i = min;
    //     setInterval(function () {
    //         if (i < max) {
    //             i++;
    //             document.querySelector(selector).innerHTML = i + sign;
    //         };
    //     }, 10);
    // };

    // $(".owl-carousel").owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     responsive:{
    //         0:{
    //             items:2
    //         },
    //         600:{
    //             items:3
    //         }
    //     }
    // });

    // $('.grid').isotope({
    //     // options
    //     itemSelector: '.grid-item',
    //   });

    //   var $grid = $('.grid')

    //   $('.navall').click(function (e) {
    //       e.preventDefault();
    //       $grid.isotope({ filter: '*' });
    //   })
    //   $('.navweb').click(function (e) {
    //       e.preventDefault();
    //       $grid.isotope({ filter: '.web' });
    //   })
    //   $('.navmob').click(function (e) {
    //       e.preventDefault();
    //       $grid.isotope({ filter: '.mob' });
    //   })
    //   $('.navphoto').click(function (e) {
    //       e.preventDefault();
    //       $grid.isotope({ filter: '.photo' });
    //   })
    //   $('.navilus').click(function (e) {
    //       e.preventDefault();
    //       $grid.isotope({ filter: '.ilus' });
    //   })

    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();
    $(".scroll").mCustomScrollbar({
        axis: "y", // horizontal scrollbar
        setHeight: "222px",
        setWidth: "390px",
        scrollbarPosition: "inside",
        alwaysShowScrollbar: 2,
    });
});
