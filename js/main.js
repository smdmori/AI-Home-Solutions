// Go to top button
window.onscroll = function () {
    showOnScroll();
};

function showOnScroll() {
    if (document.documentElement.scrollTop > 350) {
        document.getElementById("getTop").style.opacity = "100";
    }
    if (document.documentElement.scrollTop < 350) {
        document.getElementById("getTop").style.opacity = "0";
    }
}

function scrollToTop() {
    document.documentElement.style.scrollBehavior = "smooth";
    window.scroll(0, -window.innerHeight);
}

// making nav icon rotate when clicking in mobile view
$('.navbar__collapse').click(function () {
    // $(this).find('.navbar__icon').toggleClass('navbar__icon--active')
    if (($(this).attr('aria-expanded')) === 'false') {
        $(this).find('.navbar__icon').addClass('navbar__icon--active');
    }
    if (($(this).attr('aria-expanded')) === 'true') {
        $(this).find('.navbar__icon').removeClass('navbar__icon--active');
    }
});

// making text color white in hovering nav items in desktop view
$('.nav-item').hover(function () {
    $(this).toggleClass('nav-item--hovered');
});


// making site unscrollable when user clicks on sandwitch menu icon
// FIXME: Edit scrollbar on mobile view so it be inside web page
$(".navbar-toggler").click(function () {
    if (($('.navbar-toggler').attr('aria-expanded')) === 'false') {
        $('#body').css('overflow', 'hidden');
    }

    else if (($('.navbar-toggler').attr('aria-expanded')) === 'true') {
        $('#body').css('overflow', 'visible');
    }
});

// making nav swiper show on hover
// for debugging
// $('#submenu__products .submenu li').hover(function() {
//     console.log($(this).attr('data-id'))
// },function(){});

$('#submenu__products .submenu li').hover(
    function () {
        if ($(this).attr('data-id') === '0') {
            $('.navSwiper:nth-child(1)').css('display', 'block');
            $('.navSwiper:nth-child(2)').css('display', 'none');
            $('.navSwiper:nth-child(3)').css('display', 'none');
            $('.navProducts:nth-child(4)').css('display', 'none');
            $('.navProducts:nth-child(5)').css('display', 'none');
            $('.navProducts:nth-child(6)').css('display', 'none');
        }
        if ($(this).attr('data-id') === '1') {
            $('.navSwiper:nth-child(1)').css('display', 'none');
            $('.navSwiper:nth-child(2)').css('display', 'block');
            $('.navSwiper:nth-child(3)').css('display', 'none');
            $('.navProducts:nth-child(4)').css('display', 'none');
            $('.navProducts:nth-child(5)').css('display', 'none');
            $('.navProducts:nth-child(6)').css('display', 'none');
        }
        if ($(this).attr('data-id') === '2') {
            $('.navSwiper:nth-child(1)').css('display', 'none');
            $('.navSwiper:nth-child(2)').css('display', 'none');
            $('.navSwiper:nth-child(3)').css('display', 'block');
            $('.navProducts:nth-child(4)').css('display', 'none');
            $('.navProducts:nth-child(5)').css('display', 'none');
            $('.navProducts:nth-child(6)').css('display', 'none');
        }
        if ($(this).attr('data-id') === '3') {
            $('.navSwiper:nth-child(1)').css('display', 'none');
            $('.navSwiper:nth-child(2)').css('display', 'none');
            $('.navSwiper:nth-child(3)').css('display', 'none');
            $('.navProducts:nth-child(4)').css('display', 'flex');
            $('.navProducts:nth-child(5)').css('display', 'none');
            $('.navProducts:nth-child(6)').css('display', 'none');
        }
        if ($(this).attr('data-id') === '4') {
            $('.navSwiper:nth-child(1)').css('display', 'none');
            $('.navSwiper:nth-child(2)').css('display', 'none');
            $('.navSwiper:nth-child(3)').css('display', 'none');
            $('.navProducts:nth-child(4)').css('display', 'none');
            $('.navProducts:nth-child(5)').css('display', 'flex');
            $('.navProducts:nth-child(6)').css('display', 'none');
        }
        if ($(this).attr('data-id') === '5') {
            $('.navSwiper:nth-child(1)').css('display', 'none');
            $('.navSwiper:nth-child(2)').css('display', 'none');
            $('.navSwiper:nth-child(3)').css('display', 'none');
            $('.navProducts:nth-child(4)').css('display', 'none');
            $('.navProducts:nth-child(5)').css('display', 'none');
            $('.navProducts:nth-child(6)').css('display', 'flex');
        }
    }
);

// TODO: Animation for navbar hover