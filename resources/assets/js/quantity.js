$('.addToCart .btn-add').on('click', function() {
    const qtySpan = $('.addToCart #qnty');
    const qtyValue = qtySpan.attr('value');
    let newValue = parseInt(qtyValue) + 1;
    if(newValue > 10){
        newValue  = 10;
    }
    $(qtySpan).attr('value', newValue).empty().append(newValue);

});
$('.addToCart .btn-dec').on('click',function(){
    const qtySpan = $('.addToCart #qnty');
    const qtyValue = qtySpan.attr('value');
    let newValue = parseInt(qtyValue) - 1;
    if(newValue <= 1){
        newValue = 1;
    }
    $(qtySpan).attr('value', newValue).empty().append(newValue);

});