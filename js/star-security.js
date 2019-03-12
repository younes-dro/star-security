(function ($) {

    /* Scroll to specific section on front page */
    $('a[href*=#]:not([href=#])').click(function () {
        $('.close').trigger('click');
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 50)
                }, 1000);
                
                return false;
            }
        }
    });
    /*Modal Service */

    $("body").on("click", "#services .column", function (e) {
        e.preventDefault();

//        alert($(this).find('.iteme-service').text());
//        var title = $(this).find('.iteme-service h2').text();
//        alert(title);
        var service = $(this).find('.iteme-service').html();
//        alert(service);;
        $("#modalSlick")
//                .find(".modal-title").empty().prepend(title).end()
                .find(".main-content").empty().prepend(service).end()
                .modal("show");
    });

    $('.bg-contact-devis').attr("id","bg-contact-devis");
})(jQuery);