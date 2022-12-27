    
    // Config init do codigo

$(window).on('load',function(){

    var width = window.innerWidth;
    var home = $('.home').offset().top;
    var sobre = $('.sobre').offset().top;
    var projetos = $('.projetos').offset().top;
    var contato = $('.contato').offset().top;
    var sub = -80;


    // Código git, linkedin e currículo

    if(width > 900){

        // Git

        $('#git').hover(function(){
            $('#git p').animate({
                opacity: '1'
            },'fast');
        },function(){
            $('#git p').animate({
                opacity: '0'
            },'fast');
        })

         // Linkedin
    
        $('#link').hover(function(){
            $('#link p').animate({
                opacity: '1'
            },'fast');
        },function(){
            $('#link p').animate({
                opacity: '0'
            },'fast');
        })

         // Curriculo
    
        $('#cur').hover(function(){
            $('#cur p').animate({
                opacity: '1'
            },'fast');
        },function(){
            $('#cur p').animate({
                opacity: '0'
            },'fast');
        })
    
    }


    // Código arrow home

   setInterval(changeColor, 2000);

   function changeColor(){
    $('.home-info a').css('color','rgb(0, 198, 212)','transition','2s');
   }


    //Animação do scroll Pc

    if(width > 768){
        $('.arrow-up').click(function(){
            $('html,body').animate({'scrollTop': home});
        })  

        $('.home-info a').click(function(){
            $('html,body').animate({'scrollTop': sobre});
        })

        $('.init').click(function(){
            $('html,body').animate({'scrollTop': home});
        }) 

        $('.about').click(function(){
            $('html,body').animate({'scrollTop': sobre});
        })

        $('.works').click(function(){
            $('html,body').animate({'scrollTop': projetos});
        })

        $('.contacts').click(function(){
            $('html,body').animate({'scrollTop': contato});
        })
    }

    // Header animado
    
    $('nav a:first').css('color','rgb(0, 198, 212)');

    $('nav a:eq(1),nav a:eq(2),nav a:eq(3)').mouseenter(function(){
        $('nav a:first').css('color','ghostwhite');
    })
    $('nav a:eq(1),nav a:eq(2),nav a:eq(3)').mouseleave(function(){
        $('nav a:first').css('color','rgb(0, 198, 212)');
        $('nav a:first').css('transition','0.6s');
    })

    // Arrow up

    function arrowUp(){
       $('html,body').scroll(function(){
             var altura = $(this).scrollTop();
            
             if(altura > 500){
                $('.arrow-up').fadeIn();
                $('.arrow-up').css('display','flex');
             }else if(altura <= 500){
                $('.arrow-up').fadeOut();
             }
       })

    }


    // Header Mobile
       
       if(width <= 768){
            headerMobile();
       }else if(width > 940){
            arrowUp();
       }

    
    function headerMobile(){
        $('html,body').scroll(function(){
            var height = $(this).scrollTop();
            
            if(height > 750){
                $('#h-mobile').fadeIn();
                $('nav a').css('color','ghostwhite');
                $('.about').css('color','rgb(0, 198, 212)','transition','1s');

            }else if(height < 700){
                $('#h-mobile').fadeOut();
            }

            if(height < 500){
                $('nav a').css('color','ghostwhite');
                $('.init').css('color','rgb(0, 198, 212)','transition','1s');
            }

            if(height >= projetos+sub){
                $('nav a').css('color','ghostwhite');
                $('.works').css('color','rgb(0, 198, 212)','transition','1s');
            }
            
            if(height >= contato+sub){
                $('nav a').css('color','ghostwhite');
                $('.contacts').css('color','rgb(0, 198, 212)','transition','1s');
            }

        })
    }
    
    
    // // Animação do scroll mobile

    if(width < 768){  
        $('.init').click(function(){
            $('html,body').animate({'scrollTop': home+sub});
        }) 

        $('.home-info a').click(function(){
            $('html,body').animate({'scrollTop': sobre});
        })

        $('.arrow-up').click(function(){
            $('html,body').animate({'scrollTop': home+sub});
        }) 
    
        $('.about').click(function(){
            $('html,body').animate({'scrollTop': sobre});
        })
    
        $('.works').click(function(){
            $('html,body').animate({'scrollTop': projetos+sub});
        })
    
        $('.contacts').click(function(){
            $('html,body').animate({'scrollTop': contato+sub});
        })
    
    }



    

})