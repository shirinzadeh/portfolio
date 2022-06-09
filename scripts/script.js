(function () {
    'use strict'

    const navbarToggler = $('.js-navbar-toggler');
    const html = $('html')

    navbarToggler.click(function() {
        const t = $(this);

        if(!t.hasClass('active')) {
            t.addClass('active');
            html.addClass('js-sidemenu-open');
        } else {
            t.removeClass('active');
            html.removeClass('js-sidemenu-open');
        }
    })
    
})()