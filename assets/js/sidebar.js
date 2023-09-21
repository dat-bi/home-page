jQuery(document).ready(function() {
 
    $('.dismiss, .overlay').on('click', function() {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });
 
    $('.open-menu').on('click', function(e) {
        e.preventDefault();
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
        // close opened sub-menus
        $('.collapse.show').toggleClass('show');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
 
    /* other code */
 
});

/*
    Navigation


    We want that when the user clicks on one of the menu’s links,
    the page scrolls to the right section: 
    for example, if the user clicks on the “About us” link, 
    the page should scroll to the “About us” section.

    All the menu’s links that point to different sections of the page have the class “scroll-link”.

    When one of these links is clicked, 
    we call the function “scroll_to” which uses the attribute “href” of the link, 
    calculates the right point where the page should scroll to, and then scrolls it.
*/
$('a.scroll-link').on('click', function(e) {
    e.preventDefault();
    scroll_to($(this), 0);
});
 
function scroll_to(clicked_link, nav_height) {
    var element_class = clicked_link.attr('href').replace('#', '.');
    var scroll_to = 0;
    if(element_class != '.top-content') {
        element_class += '-container';
        scroll_to = $(element_class).offset().top - nav_height;
    }
    if($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({scrollTop: scroll_to}, 1000);
    }
}


$('.to-top a').on('click', function(e) {
    e.preventDefault();
    if($(window).scrollTop() != 0) {
        $('html, body').stop().animate({scrollTop: 0}, 1000);
    }
});

$('a.btn-customized-dark').on('click', function(e) {
    e.preventDefault();
    $('.sidebar').removeClass('light');
});
 
$('a.btn-customized-light').on('click', function(e) {
    e.preventDefault();
    $('.sidebar').addClass('light');
});


$('.section-container').waypoint(function(direction) {
    if (direction === 'down') {
        $('.menu-elements li').removeClass('active');
        $('.menu-elements a[href="#' + this.element.id + '"]').parents('li').addClass('active');
    }
},
{
    offset: '0'
});
 
$('.section-container').waypoint(function(direction) {
    if (direction === 'up') {
        $('.menu-elements li').removeClass('active');
        $('.menu-elements a[href="#' + this.element.id + '"]').parents('li').addClass('active');
    }
},
{
    offset: '-5'
});
$('.sidebar').mCustomScrollbar({
    theme: "minimal-dark"
});