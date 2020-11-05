$(document).ready(function () {
    $(".carousel").carousel({
        interval: 150 
    })


    $(window).scroll(function(){
        $('.bolum2, .bolum3, .bolum4, .bolum5, footer').each(function(){
            var ustKenar = $(this).offset().top;
            var pencereAlt = $(window).scrollTop()+$(window).height();
            if(pencereAlt > ustKenar){
                $(this).css({'opacity':'1'});
            }
                
            else{
                $(this).css({'opacity':'0'});
            }
            
        })
    })


    window.addEventListener("load",function(){
        var yukleniyor = document.querySelector(".loader");
         yukleniyor.classList.add("hidden");
    });

    /*$(".loader").addClass("hidden");*/

    /*$("a").click(function(){
        var adres = $(this).attr("href");
        if(adres != ""){
            $("html,body").animate({
                scrollTop : $(adres).offset().top
            },800);
        }
    });*/ //Burası çalışmadı neden anlamadım


});


const menu = document.querySelector('.navbar');

window.onscroll = function(){
    var top=window.scrollY;
    console.log(top);
    if(top>= 100){
        menu.classList.add('active')
    }

    else{
        menu.classList.remove('active')
    }

}


