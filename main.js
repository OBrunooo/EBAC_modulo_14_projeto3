$(document).ready(function(){

    $(".btn-assinar").click(function(){
        const destino= $("#assinatura");
        
        $('html').animate({
            scrollTop: destino.offset().top
        },200)
    })
})