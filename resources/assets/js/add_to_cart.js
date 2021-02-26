
$('.addToCart .btn-add-to-cart').on('click', function(event) {
    const $cart = $('#cart');
    const qtySpan = $('.addToCart #qnty');
    const qtyValue = qtySpan.attr('value');
    const cartQuantity = $cart.attr('data-totalitems');
    let totalItems = qtyValue;
    let cartValue = parseInt(cartQuantity) + parseInt(qtyValue);
    $cart.attr('data-totalitems', cartValue)
    
});

$('.product-grid__add-to-cart').on('click', function(event) {
    const addedToCart = $('.product-grid__add-to-cart'); 
    const qtyCart = $('.cart-count');
    const qtyValue = qtyCart.attr('value');
    const cartQuantity = qtyCart.attr('.cart-count');
    let totalItems = qtyValue;
    let cartValue = parseInt(cartQuantity) + parseInt(qtyValue);
    debugger;
});