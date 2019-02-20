$(document).ready(function () {
    var $header = $('.header')
    var $nav = $('.navbar')
    var fixed = false;
    var $links = $('.collapse ul a')

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
    $('.footer .down').click(function (e) {
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })
    $('.contact .down').click(function (e) {
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: 9999
        }, 1000)
    })

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
      
      wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
    });