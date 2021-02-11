$(document).ready(function(){
    $('#showNav').click(function(){
        $('.navigation').show(500);
        $(this).hide()
    })

    $('#hideNav').click(function(){
        $('.navigation').hide(500);
        $('#showNav').show(600)
    })
})