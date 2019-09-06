jQuery(document).ready(function(){
    "use strict"
    $('.slider').ripples({
        dropRadius: 30,
        perturbance: 0.01,
        
    }) ;
    var text = new Typed('.text',{
        strings:['<strong>We love </strong><strong class="primary"> animals!</strong>','<strong class="primary1"> Welcome to our blog!</strong>'],
        typespeed:0,
        loop:true
    });

    $(window).scroll(function(){
        var top = $(window).scrollTop();
         if(top>=60){
             $("nav").addClass('secondary');
         }
         else
             if($("nav").hasClass('seconday')){
                $("nav").removeClass('seconday');
             }
         
    });
    $('.sales').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
        enabled: true
         } 
                                 
      });

   
    $("a.smooth-scroll").click(function (event) {

      event.preventDefault();
      
      var section = $(this).attr("href");

      $('html, body').animate({
          scrollTop: $(section).offset().top - -2
      }, 1250, "easeInOutExpo");
  });
   new WOW().init();

});