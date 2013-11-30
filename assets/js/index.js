(function ($) {
    "use strict";

    $(document).ready(function(){
        
        /*
        $('#site-head').backstretch([
            "http://www.gratisography.com/pictures/33H.jpg",
            "http://www.gratisography.com/pictures/35H.jpg"
        ], {duration: 3000, fade: 750});
        */
        
        $('.slider-next').on('click', function() {
            
           $('#site-head').backstretch("next");
            
        });
        
        $('.slider-prev').on('click', function() {
            
           $('#site-head').backstretch("prev");
            
        });
        
        $('#site-head').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
            
          if (isInView) {
              
            $('.blog-title').each(function(i) { 
                
                $(this).fadeTo(300, 1);
            
            });
              
            if (visiblePartY == 'top') {
                
            } else if (visiblePartY == 'bottom') {

            } else {

            }
          } else {

              
          }
        });
        
        /*
        
            var BV = new $.BigVideo({useFlashForFirefox:false, container:$('#site-head')});
            BV.init();
            BV.show('assets/video/sample.mp4', {ambient:true});
        
        $('.content-arrow').on('click', function() {
           
            BV.getPlayer().pause();
            
        });
        
        */
        
        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

    });
    
    $(function() {
        
      $('a[href*=#]:not([href=#])').click(function() {
          
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            
          var target = $(this.hash);
            
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            
          if (target.length) {
              
            $('html,body').animate({
                
              scrollTop: target.offset().top
                
            }, 760);
              
            return false;
              
          }
            
        }
          
      });
        
    });
    
    
    
}(jQuery));


