
set_sizes();

$(document).ready(function() {
	window.scrollTo(0, 1);
	
	$('.js #menu-toggle').click(function (e) {
		e.stopPropagation();
  		e.preventDefault();
		$('body').toggleClass('active');
    });
    
 
    /* Scroll to div */
      $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top-89)
        }, 500);
        return false;
      }
    }
    });

    $('nav.site-nav li a').click(function(){
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    });

    /*  Todo Light up div based on scroll position */

    
    $(window).resize(set_sizes);

     /* displaying blocks for CAREERS section */
    $('#apply-link, #commitment-link').click(function(event) {
        event.preventDefault();
        $('#apply-link, #commitment-link').toggleClass('selected');
        $('#eeo, #commitment').toggle();
    });

    /*expanding lists for mobile for LOCATIONS section */
    $('h4').click(function(){
      if($(this).next().is(":visible")){
         $(this).next().slideUp("slow");
      }else{
         $(this).next().slideDown("slow");
      }    
    });
});

/*sets the size for font and padding of the text on the main image Home section*/
function set_sizes(){
    $('article.text h2').css('font-size',($(window).width()/600)*100 + '%' );
    $('article.text p').css('font-size', ($(window).width()/1500)*100 + '%' );    
    var $home = $("#home"), $articleText = $('article.text');
    var marginTop = (Math.max(($home.height() - ($articleText.height() + ($home.width() * 0.07) )), 1.5)/2);
    if(marginTop < ($home.width() * 0.035)){
        var padding = marginTop / $home.width();
        $articleText.css('padding', (Math.max(padding, 0.015) * 100) + '%');
        marginTop = (Math.max(  ($home.height() - ($articleText.height() + ($home.width() * (padding * 2)))), 0)/2);
    }else{
      $articleText.css('padding', '3.5%');
    }
    $articleText.css('margin-top', marginTop + 'px');
}

