jQuery(function(){
	jQuery('#block-os-primary-menu > ul > li.menuparent').mouseenter(function(){
		jQuery(this).addClass('mouseenter')
			.children(':last').css({display:'block', visibility:'visible'});
	}).mouseleave(function(){
		jQuery(this).removeClass('mouseenter')
			.children(':last').css({display:'none', visibility:'invisible'});
	});
});