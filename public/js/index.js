$(document).ready(function(){
    $(".userInputCM").on( "focus", function(){
        $(".addComment").addClass("show")
    })
    $(".userInputCM").on( "focusout", function(){
        $(".addComment").removeClass("show")
    })
    $(".fa-comment").click(function() {
        $('html, body').animate({
            scrollTop: $(".userInputCM").offset().top-200
        }, 500, function(){$( ".userInputCM" ).focus();});
    });
    $('.far.fa-heart').on('click',function(){
        $('.fa-heart').toggleClass("like")
    })

    var element_position = $('.svg-wrapper').offset().top;

    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = element_position;

        if(y_scroll_pos > scroll_pos_test+20) {
            $('.svg-wrapper').addClass('orderFixed')
            $('#textButton a').addClass('colorWhite')
        }
        else{
            $('.svg-wrapper').removeClass('orderFixed')
            $('#textButton a').removeClass('colorWhite')
        }
    }); 
    // $(window).scroll(function() {
    //     var hT = $('.svg-wrapper').offset().top,
    //         hH = $('.svg-wrapper').outerHeight(),
    //         wH = $(window).height(),
    //         wS = $(this).scrollTop();
    //         if (wS > (hT+hH-wH)){
    //             $('.svg-wrapper').addClass('orderFixed')
    //             $('#textButton a').addClass('colorWhite')
    //             $("#shape").addClass('animateButton')
    //         }
    //  });
})