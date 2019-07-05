$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').hide(1000);
         })

    $('div').mouseleave(function() {
        $(this).animate({
            height: '=40px' , width:'=50px'
        });
    });
    //
    $('div').click(function() {
        $(this).css('background-color', 'red');
       
    });
})	