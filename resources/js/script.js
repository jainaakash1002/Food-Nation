$(document).ready(function () {
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '50px;'
    });
    
    
    /* Scroll on button 1 of homepage */
    $('.js--scroll-to-plans').click(function () {
       $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
        /* Scroll on button 2 of homepage */
    $('.js--scroll-to-start').click(function () {
       $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /* Scroll on icon of floating nav click of homepage */
    $('.js--logo-black').click(function () {
       $('html,body').animate({scrollTop: $('.js--logo-white').offset().top}, 1000);
    });
    
    /* Navigation Scroll */
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
    
    /* Animation on Scroll */
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, { 
        offset:'50%'
    });
    
    /* Animation on Scroll */
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated slideInUp');
    }, { 
        offset:'50%'
    });
    
    /* Animation on Scroll */
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    }, { 
        offset:'50%'
    });
    
    /* Animation on Scroll */
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    }, { 
        offset:'50%'
    });


    /* Mobile navigation bar */

$('.js--nav-icon').click(function() {
    var nav=$('.js--main-nav');
    var icon=$('.js--nav-icon i');
    nav.slideToggle(200);
    if(icon.hasClass('ion-navicon-round'))
        {
         icon.addClass('ion-close-round');
         icon.removeClass('ion-navicon-round');
        } 
    else 
        {
         icon.addClass('ion-navicon-round');
         icon.removeClass('ion-close-round');
        }
    });
    
    
    /*  MAPS  */
   var map= new GMaps({
  div: '.map',
  lat: 12.9715144,
  lng: 77.7,
  zoom:12        
});
    
    map.addMarker({
  lat: 12.9715144,
  lng: 77.5945123,
  title: 'Bengaluru',
  infoWindow: {
  content: '<p>Our Bengaluru HQ</p>'
}
});
});