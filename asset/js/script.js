$(document).ready(function(){
    // Mobile Menu Icon
    $('#nav-icon4').click(function(){
        $(this).toggleClass('open');
        $('.min-menu').slideToggle();
    });


    $('.testimonial-items').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:false
            },
        }
    })


    $('.owl-brand').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        items:5,
        responsive:{
            0:{
                items:2,
                nav:true,
            },
            576:{
                items:3,
                nav:false,
            },
            768:{
                items:4,
                nav:false,
            },
            991:{
                items:5,
                nav:false,
            },
        }
    })
   

});

