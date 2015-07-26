$( document ).ready(function(){	
	$('.menu > li').on('mouseenter', function(){		
		var self = $(this);		
		self.find('.subsetmenu').width(self.width());
		$(this).addClass('headmouseover');		
	});	
	$('.menu > li').on( 'mouseleave', function(){
		var self = $(this);		
		self.find('.subsetmenu').width(self.width());
		$(this).removeClass('headmouseover');	
	});	
	$('.submenu').on('mouseleave', function(){
		var self = $(this);
		$(self).parents().removeClass('headmouseover');
	});
});