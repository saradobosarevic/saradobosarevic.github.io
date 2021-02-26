$(document).on('ready',function () {
    var cart_val = 0;
    var cart_total = 0;
    $('body').on("click", ".cart-click", function (e) {
        e.preventDefault();
        $(this).text('Added');
        cart_val = $('.cart-count').text();
        cart_val = parseInt(cart_val) + 1;
        $('.cart-count').text(cart_val);
        $(this).removeClass('cart-click');
        $(this).addClass('added-in-cart');
        var img_url = $(this).data('img');
        var p_title = $(this).data('title');
        var p_id = $(this).parent().attr('id');
        var price = $(this).parent().find('.price_outer').find('.price').text();
        cart_total = cart_total + parseInt(price);

        var cart_content = '<div class="cart-row" id="cart-itm-' + p_id + '" data-price="' + price + '">';
        cart_content = cart_content + '<div class="cart-close" data-refer="' + p_id + '"><img src="https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/close_red.png"/></div>';
        cart_content = cart_content + '<span><img src="' + img_url + '"/></span>';
        cart_content = cart_content + '<div class="cart-text"><h4>' + p_title + '</h4>';
        cart_content = cart_content + '<p>$' + price + '</p></div></div>';
        $('.cart-contents').prepend(cart_content);
        $('.cart-total').find('span').text(cart_total);
        $('.c-e-txt').hide();
        $('.cart-total').show();
        $('.cart button').show();
    });

    $('.cart-icon').click(function (e) {
        e.preventDefault();
        var t = parseInt($('.cart-total span').text());
        if (t == 0) {
            $('.c-e-txt').show();
            $('.cart-total').hide();
            $('.cart button').hide();
        } else {
            $('.c-e-txt').hide();
            $('.cart-total').show();
            $('.cart button').show();
        }
        $('.cart-contents').slideToggle();
    })

    $('body').on("click", ".cart-close", function () {
        var id = $(this).data('refer');
        price = $('#cart-itm-' + id).data('price');
        cart_total = parseInt($('.cart-total').find('span').text());
        cart_total = cart_total - parseInt(price);
        $('.cart-total').find('span').text(cart_total);

        var cart_count = parseInt($('.cart-count').text());
        cart_count = cart_count - 1;
        $('.cart-count').text(cart_count);

        if (cart_count == 0) {
            $('.cart-contents').slideToggle();
        }

        $('#cart-itm-' + id).remove();

        $('#' + id).find('.add-to-cart').removeClass('added-in-cart');
        $('#' + id).find('.add-to-cart').addClass('cart-click');
        $('#' + id).find('.add-to-cart').text('Add To Cart');
        var t = parseInt($('.cart-total span').text());
        if (t == 0) {
            $('.c-e-txt').show();
            $('.cart-total').hide();
            $('.cart button').hide();
        } else {
            $('.c-e-txt').hide();
            $('.cart-total').show();
            $('.cart button').show();
        }
    });
});