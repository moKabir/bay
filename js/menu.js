/* Navigation */
jQuery(document).ready(function(e) {

	jQuery(".humburger").click(function() {
        jQuery("body").addClass("menu-action");
    });
	jQuery(".close").click(function() {
        jQuery("body").removeClass("menu-action");
		jQuery("body").removeClass("popup-action");
		jQuery(this).parent().parent().removeClass("show active");
    });
	
	jQuery(".main-menu").click(function() {
        jQuery("body").addClass("main-menu-action");
    });
	jQuery(".close").click(function() {
        jQuery("body").removeClass("main-menu-action");
    });
	
});

jQuery(window).on('click touchend', function(e) {
	if (!jQuery(e.target).hasClass("humburger") && !jQuery(e.target).hasClass("close") && !jQuery(e.target).hasClass("d-menu") && jQuery(e.target).parents(".d-menu").length === 0 && jQuery(e.target).parents(".humburger").length === 0) {
        jQuery("body").removeClass("menu-action");
	}
});

jQuery(window).on('click touchend', function(e) {
	if (!jQuery(e.target).hasClass("main-menu") && !jQuery(e.target).hasClass("close") && !jQuery(e.target).hasClass("navigation") && jQuery(e.target).parents(".navigation").length === 0 && jQuery(e.target).parents(".main-menu").length === 0) {
        jQuery("body").removeClass("main-menu-action");
	}
});

/* Navigation */