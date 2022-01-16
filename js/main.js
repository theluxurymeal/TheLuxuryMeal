(function($) {
    "use strict"; // Start of use strict

    $('.news-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoHeight:true,
        autoHeightClass: 'owl-height',
        pagination: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('.testimonial-area').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        autoHeight:true,
        pagination: true,
        navText : ["<img src='./img/slider/rightarrow.png' />","<img src='./img/slider/leftarrow.png' />"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    
    $('.main-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        pagination: true,
        autoHeight: false,
//        autoHeightClass: 'owl-height',
        navText : ["<img src='./img/slider/rightarrow.png' />","<img src='./img/slider/leftarrow.png' />"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
             $('.navbar').addClass('active');
        } else {
             $('.navbar').removeClass('active');
        }
    });



      
        // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: (target.offset().top - 56)
              }, 1000, "easeInOutExpo");
              return false;
            }
          }
        });
      
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
    
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '.navbar',
        offset: 100,

    });
      

    // Initialize and add the map

     // End of use strict

})(jQuery);

function initMap() {
    // The location of bhopal
    var bhopal = {lat: 23.24095, lng: 77.39756};
    // The map, centered at bhopal
    var map = new google.maps.Map(
        document.getElementById("map"), {zoom: 4, center: bhopal});
    // The marker, positioned at bhopal
    var marker = new google.maps.Marker({position: bhopal, map: map});
    }

function gotowhatsapp() {
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var review = document.getElementById("review").value;

    var url = "https://wa.me/919508849548?text=" 
    + "Name: " + name + "%0a"
    + "Email: " + email  + "%0a"
    + "Review: " + review; 

    window.open(url, '_blank').focus();
}