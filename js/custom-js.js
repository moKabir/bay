// JavaScript Document

jQuery( document ).ready(function() {
jQuery('.site-banner-main').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots:false
  });

jQuery('.prdt-display-wrapper').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots:false,
   responsive: [
    {
      breakpoint: 9999,
     settings: "unslick"
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
		dots: true,
        slidesToShow: 3
      }
    },
	{
      breakpoint: 576,
      settings: {
		  arrows: false,
		dots: true,
        slidesToShow: 2
      }
    },
	{
      breakpoint: 376,
      settings: {
		  arrows: false,
		dots: true,
        slidesToShow: 1
      }
    }
  ]
});

	jQuery(".humburger").click(function() {
        jQuery("body").addClass("show-menu");
    });
	jQuery(".close").click(function() {
        jQuery("body").removeClass("show-menu");
		jQuery("body").removeClass("popup-action");
//		jQuery("body").removeClass("popup-action");
//		jQuery(this).parent().parent().removeClass("show active");
    });
	
//	jQuery(".main-menu").click(function() {
//        jQuery("body").addClass("main-menu-action");
//    });
//	jQuery(".close").click(function() {
//        jQuery("body").removeClass("main-menu-action");
//    });

jQuery(window).on('click touchend', function(e) {
	if (!jQuery(e.target).hasClass("humburger") && !jQuery(e.target).hasClass("close") && !jQuery(e.target).hasClass("side-menu")  && jQuery(e.target).parents(".side-menu").length === 0) {
        jQuery("body").removeClass("show-menu");
		
	}
  });
$(window).scroll(function() {
					if (jQuery(window).scrollTop() >= 100) {
						jQuery(".site-header").addClass("sticky");
					} else {
						jQuery(".site-header").removeClass("sticky");
					}
				});	
jQuery(window).on("resize load",function(e){
 jQuery(".site-wrapper").css("padding-top", jQuery(".site-header").height());
});

if($(window).width() <= 767){
   		$(".footer-content-wrapper > .footer-content-block > h6.content-block-title").click(function(e){
         e.preventDefault();
         $(this).parent().toggleClass('child-open');
         $(this).siblings().slideToggle(800);
		 $(this).parent().siblings().removeClass("child-open").hasClass("child-open");
		 $(this).parent().siblings().children("ul").slideUp(800).parent().hasClass("child-open");
         });
}
else {
   	$(this).parent().siblings().removeClass('child-open');
}

jQuery(window).load(function(){
	 setTimeout(function(){
       $("body").addClass("popup-action");
   });
	$("#newsletter").addClass("open"); 
});
});
