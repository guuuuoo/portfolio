/*
Theme Name: IAMX
Author: Trendy Theme
Author URL: trendytheme.net
*/

/*
    = Preloader
    = Animated scrolling / Scroll Up
    = Full Screen Slider
    = Sticky Menu
    = Back To Top
    = Countup
    = Progress Bar
    = More skill
    = Shuffle
    = Magnific Popup
    = Vidio auto play
    = Fit Vids
    = Google Map

*/

jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    // Full Screen Slider
    // -------------------------------------------------------------
    (function () {
        $(".tt-fullHeight").height($(window).height());

        $(window).resize(function () {
            $(".tt-fullHeight").height($(window).height());
        });

    }());


    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function () {
        $('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        })
    }());




    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());


    // -------------------------------------------------------------
    // Countup
    // -------------------------------------------------------------
    $('.count-wrap').bind('inview', function (event, visible) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });





    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------

    $('.skill-progress').bind('inview', function (event, visible) {
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).unbind('inview');
        }
    });

    // -------------------------------------------------------------
    // More skill
    // -------------------------------------------------------------
    $('.more-skill').bind('inview', function (event, visible) {
        if (visible) {
            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                barColor: '#F48F38',
                trackColor: '#ddd',
                scaleColor: false,
                lineWidth: 8,
                size: 140,
                animate: 2000,
                onStep: function (from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }
            });
            $(this).unbind('inview');
        }
    });



    // -------------------------------------------------------------
    // Fit Vids
    // -------------------------------------------------------------
    // (function () {
    //     $(".video-container").fitVids();
    // }());



    // // -------------------------------------------------------------
    // // Vidio auto play
    // // -------------------------------------------------------------
    // (function () {

    //     /* Vimeo API: http://developer.vimeo.com/player/js-api */

    //     var iframe = document.getElementById('nofocusvideo');
    //     // $f == Froogaloop
    //     var player = $f(iframe);

    //     $('.modal').on('hidden.bs.modal', function () {
    //         player.api('pause');
    //     })

    //     $('.modal').on('shown.bs.modal', function () {
    //         player.api('play');
    //     })
    // }());




    // -------------------------------------------------------------
    // STELLAR FOR BACKGROUND SCROLLING
    // -------------------------------------------------------------

    $(window).load(function () {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        } else {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    });


    // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function () {

        new WOW({

            mobile: false

        }).init();

    }());


    //---------------------------------------------------------------
    //Artworks JS
    //---------------------------------------------------------------

    const items = document.querySelectorAll('.portfolio-item')
    function expand(item, i) {
        items.forEach((it, ind) => {
            if (i === ind) return;
            it.clicked = false;
        });
        gsap.to(items, {
            width: item.clicked ? '24%' : '10%',
            duration: 1.5,
            ease: 'elastic(1, .6)'
        });

        item.clicked = !item.clicked;
        gsap.to(item, {
            width: item.clicked ? '70%' : '24%',
            duration: 1.5,
            ease: 'elastic(1, .6)'
        });
    };

    items.forEach((item, i) => {
        item.clicked = false
        item.addEventListener('click', () => expand(item, i))
    });


    // -------------------------------------------------------------
    // Popup JS
    // -------------------------------------------------------------

    $(function () {
        $('#popup01').click(function () {
            $('#pop01').show();
        });
        $('#popup02').click(function () {
            $('#pop02').show();
        });

        $('.popup i').click(function () {
            $('.popup').hide();
        });
    });

});

// -------------------------------------------------------------
// Scroll up
// -------------------------------------------------------------

$(function () {
    $(".up_img").mouseover(function () {
        $(this).toggleClass("up_img_rotate");
    });
});

$(function () {
    $(".up_img").mouseleave(function () {
        $(this).toggleClass("up_img_rotate");
    });
});


//---------------------------------------------------------------
// slide
//---------------------------------------------------------------
const main = document.querySelector("#slide-section");
const group = document.querySelector("#slide-group");

for (let i = 0; i < 4; i++) {
    if (i > 0) {
        const clone = group.cloneNode(true);
        const path = clone.querySelector(".shape");
        path.id = "shape" + (i + 1);
        main.append(clone);
    }
}

gsap.set(".morph-shapeIndex", {
    innerHTML: (i) => ["default", "3", "6", "9"][i]
});

gsap.to(".shape", {
    delay: (i) => i * 0.25,
    duration: 2,
    ease: "power3.inOut",
    yoyo: true,
    repeat: -1,
    morphSVG: (i) => [
        { shape: "#shapeNew" },
        { shape: "#shapeNew" },
        { shape: "#shapeNew" },
        { shape: "#shapeNew" }
    ][i]
});