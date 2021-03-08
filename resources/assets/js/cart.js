$(document).ready(function () {
    // $('.cart-button').on('click', function () {
    //     let cartCount = $('.cart-icon').attr('data-count');
    //     cartCount = parseInt(cartCount);
    //     $('.cart-icon').attr('data-count', cartCount + 1);
    // });

    // $('.cart-block_quantity_buttons_increase').on('click', function () {
    //     const qty = $('.cart-block_quantity .cart-block_quantity_total');
    //     let qtyValue = qty.attr('value');
    //     const newQtyValue = parseInt(qtyValue) + 1;
    //     qty.attr('value', newQtyValue);
    //     qty.empty().append(newQtyValue);
    // });

    // $('.cart-block_quantity_buttons_decrease').on('click', function () {
    //     const qty = $('.cart-block_quantity .cart-block_quantity_total');
    //     let qtyValue = qty.attr('value');
    //     const newQtyValue = parseInt(qtyValue - 1);
    //     if (qtyValue > 0) {
    //         qty.attr('value', newQtyValue);
    //         qty.empty().append(newQtyValue);
    //     }
    // });

    // $('.cart-button').on('click', function () {
    //     let vrednost = $('.cart-block_quantity .cart-block_quantity_total').attr('value');
    //     let counter = $('.cart-icon');
    //     let newValue = parseInt(vrednost) + parseInt(counter.attr('data-count'));
    //     counter.attr('data-count', newValue);
    // });



    $('.product-card-footer .button-wrapper .add-to-cart-button').on('click',function(e){
        let cartCount = $('.cart-content-count .cnt').attr('data-count');
        let cart = localStorage.getItem('cart');
        if (!cart) {
            cart = {};
        } else {
            cart = JSON.parse(cart);
        }

        const productId = $(this).attr('data-product-id');
        const price = $(this).attr('data-product-price');
        const currency = $(this).attr('data-product-currency');
        const qty = cart[productId] ? cart[productId].qty + 1 : 1;
        cart[productId] = {
            name: $(this).attr('data-product-name'),
            qty,
            price: qty * parseInt(price),
            currency        
        }
        cartCount = parseInt(cartCount);
        const newCartCount = cartCount + 1;
        debugger;
        $('.cart-content-count .cnt').attr('data-count',newCartCount).empty().append(newCartCount); 
        localStorage.setItem('cartCount',newCartCount);
        localStorage.setItem('cart', JSON.stringify(cart));
    });


    

});

$('.cart-icon').on('click', function() {
    $('.drop_down_card').toggleClass('open');
    $('.overlay').toggleClass('show');

});

