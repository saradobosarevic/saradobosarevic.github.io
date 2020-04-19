$('.m-hamburger__icon').on('click', function() {
    $(this).toggleClass('m-hamburger__icon--active');
    $('.m-hamburger').toggleClass('m-hamburger--active');
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 50) {
        $('#navbar').addClass('navigation--scrolled');
        $('.m-hamburger').addClass('m-hamburger--scrolled')
    } else {
        $('#navbar').removeClass('navigation--scrolled');
        $('.m-hamburger').removeClass('m-hamburger--scrolled')
    }

    $('.m-hamburger.m-hamburger--active').removeClass('m-hamburger--active');
    $('.m-hamburger__icon.m-hamburger__icon--active').removeClass('m-hamburger__icon--active');
    
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}