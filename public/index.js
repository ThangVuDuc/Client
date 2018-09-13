$(document).ready(function () {
    $(".userInputCM").on("focus", function () {
        $(".addComment").addClass("show")
    })
    $(".userInputCM").on("focusout", function () {
        $(".addComment").removeClass("show")
    })
    $(".fa-comment").click(function () {
        $('html, body').animate({
            scrollTop: $(".userInputCM").offset().top - 200
        }, 500, function () { $(".userInputCM").focus(); });
    });
    $('.far.fa-heart').on('click', function () {
        $('.fa-heart').toggleClass("like")
    })

    $('.addFood i').on('click', function (e) {
        var index = e.target.getAttribute("name")
        var quantity = $(`.food` + index + ` .quantity`);
        quantity.text(parseInt(quantity.text()) + 1)
    })
    $('.minusFood i').on('click', function (e) {
        var index = e.target.getAttribute("name")
        var quantity = $(`.food` + index + ` .quantity`);
        if (quantity.text() == 0) {
        }
        else {
            quantity.text(parseInt(quantity.text()) - 1)
        }
    })

    var element_position = $('.cart').offset().top;
    $(window).on('scroll', function () {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = element_position - 50;

        if (y_scroll_pos > scroll_pos_test) {
            $('.cart').addClass('fixedCart')
        }
        else {
            $('.cart').removeClass('fixedCart')
        }
        if(window.pageYOffset>200){
            $('.banner').addClass("navBg")
        }
    });
})