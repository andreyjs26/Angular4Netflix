// Ejemplo

$.ready(function(){
    // $('input').addClass('blue');
    $('#cta1').on('click',function(){
        $('p.first').hide();
    });

    $('.eye').on('mouseover',function(){
        this.find('.parpado_down').css({top : '20px'});
    });

    $('.eye').on('mouseout',function(){
        this.find('.parpado_down').css({top : '60px'});
    });


    $.databinding('ng');
});
