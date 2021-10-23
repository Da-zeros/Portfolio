$(function(){

    //Efecto menú

    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top':'-200px'
        });

        $(this).animate({
            top:'0'
        },2000 + (index * 500));
    });

    // Efecto header

    if ( $(window).width() > 800){
        $('header .textos').css({
            opacity: 0,
            marginTop:0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop:'-50px'
        },1500);
    }

    // Scroll Elementos Menú

    var acercaDe = $('#acerca_de').offset().top,
        menu = $('#menu').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn_acerca_de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe
        },500);
    });

    $('#btn_menu').on('click', function(e){
        e.preventDefault();
        $('html , body').animate({
            scrollTop: menu +500
        }, 500);

    });

    $('#btn_galeria').on('click', function(e){
        e.preventDefault();
        $('html , body').animate({
            scrollTop: galeria - 120
        }, 500);

    });

    $('#btn_ubicacion').on('click', function(e){
        e.preventDefault();
        $('html , body').animate({
            scrollTop: ubicacion
        }, 500);

    });

    //  ========= Efecto parallax ==========

    $(window).scroll(function(){
        var windowWidth = $(window).width();

        if(windowWidth > 800){
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });

            $('.main .acerca_de article').css({
                'transform':'translate(0px, -' + scroll /4 + '%)'
            });

        }
    });

    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 800){
            $('.main .acerca_de article').css({
                'transform':'translate(0px, 0px)'
            })
        }
    });
});