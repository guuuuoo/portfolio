


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
    //Artworks -Drawing
    //---------------------------------------------------------------

    const items = document.querySelectorAll('.portfolio-item')
    function expand(item, i) {
        items.forEach((it, ind) => {
            if (i === ind) return;
            it.clicked = false;

            const worktext = it.querySelector('.works-text');
            if (worktext) worktext.style.opacity = "0";
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
            ease: 'elastic(1, .6)',
            onStart: () => {
                const worktext = item.querySelector('.works-text');
                if (worktext) worktext.style.opacity = item.clicked ? '1' : '0';
            },
        });

    };

    items.forEach((item, i) => {
        item.clicked = false
        item.addEventListener('click', () => expand(item, i))
    });
});

//---------------------------------------------------------------
//Artworks -SNS
//---------------------------------------------------------------
var swiper = new Swiper(".snsbox", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".snsbox2", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
    on: {
        slideChange: function () {
            const currentSlide = this.realIndex + 1;
            const totalSlides = this.slides.length;
            document.querySelector('.slide-counter').textContent = `${currentSlide} / ${totalSlides}`;
        }
    }
});

//---------------------------------------------------------------
//Artworks -Photography
//---------------------------------------------------------------
const postPhoto = document.querySelector('.photo-slider');
const photo_img = postPhoto.querySelectorAll('img');

photo_img.forEach(photo => {
    const clone = photo.cloneNode(true);
    postPhoto.appendChild(clone);
});

let current = 0;
const total = photo_img.length;

function moveSlide() {
    current++;
    postPhoto.style.transform = `translateX(-${current * 100}%)`;

    if (current >= total) {
        setTimeout(() => {
            postPhoto.style.transition = 'none';
            postPhoto.style.transform = 'translateX(0)';
            current = 0;
            setTimeout(() => postPhoto.style.transition = 'transform 0.5s linear', 50);
        }, 500);
    }
};

setInterval(moveSlide, 3000);


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


// -------------------------------------------------------------
// Contact Section con
// -------------------------------------------------------------
$(function () {
    $(".con-left, .con-right").on({
        mouseleave: function () { $(this).children(".con_hover").removeClass("con_click") },
        click: function () { $(this).children(".con_hover").toggleClass("con_click") }
    });
});


// -------------------------------------------------------------
// Portfolio Btn Cursor
// -------------------------------------------------------------
const targetDiv1 = document.getElementById("portfolio")
const cursor = targetDiv1.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

targetDiv1.addEventListener('mousemove', updateCoordinates);

targetDiv1.addEventListener('mouseenter', function () {
    cursor.style.display = "block";
});

targetDiv1.addEventListener('mouseleave', function () {
    cursor.style.display = "none";
});

function getAngle(diffX, diffY) {
    return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
    const distance = Math.sqrt(
        Math.pow(diffX, 2) + Math.pow(diffY, 2)
    );
    const maxSqueeze = 0.15;
    const accelerator = 1500;
    return Math.min(distance / accelerator, maxSqueeze);
}

const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const angle = getAngle(diffX, diffY);
    const squeeze = getSqueeze(diffX, diffY);

    const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
    const rotate = 'rotate(' + angle + 'deg)';
    const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

    cursor.style.transform = translate;
    cursorCircle.style.transform = rotate + scale;
};

function loop() {
    updateCursor();
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);


const cursorModifiers = targetDiv1.querySelectorAll('a');

cursorModifiers.forEach(curosrModifier => {
    curosrModifier.addEventListener('mouseenter', function () {
        cursor.classList.add('cursor_on');
    });

    curosrModifier.addEventListener('mouseleave', function () {
        cursor.classList.remove('cursor_on');
    });
});