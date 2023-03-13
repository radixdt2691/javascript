$('.nav li > .sub-menu').parent().click(function() {
    var submenu = $(this).children('.sub-menu');
    $(submenu).slideToggle();
});