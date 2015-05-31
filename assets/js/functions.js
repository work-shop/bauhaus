
//global variables
var cw,ch;
var loaded = false;
var state = 'intro';
var moving = false;


//initial events, and general event binding
jQuery(document).ready(function($) {

	console.log('functions.js');

	view();

	/* for touch scrolling, this event fires when touch point is moved*/
	document.addEventListener("touchmove", scrollStart, false);
	
	$('#backtotop').click(function(event) {
	  	event.preventDefault();
		$('body,html').animate({scrollTop:0},2000);
	});
	
	$('.menu-toggle').click(function(event) {
	  	event.preventDefault();
		menuToggle();
		console.log('.menu-toggle clicked');
	});

	$(".jump").click(function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		href = href.toLowerCase();
		scrollLink(href);	
	});
		

});//end document.ready


$(window).resize(function() {

	view();	
	
});//end window.resize



//FUNCTIONS

//m or M	
$(document).keypress(function(e) {
	if(e.which == 109 || e.which == 77) {	
		if($("input:focus")){
			var elem = document.activeElement;
			if (! elem.type ){ 
				menuToggle();
				console.log('m and menu toggle');	
			}
		}
	}
});

//down arrow
$(document).keydown(function(e){
    if (e.keyCode == 40) { 
		
	}  
    return false;
});

//up arrow
$(document).keydown(function(e){
    if (e.keyCode == 38) { 
    
	}  
    return false;
});

//left arrow
$(document).keydown(function(e){
    if (e.keyCode == 37) { 
    	
       return false;
    }
});

//right arrow
$(document).keydown(function(e){
    if (e.keyCode == 39) { 
    	
       return false;
    }
});


//initialize flexslider slideshows
function flexsliderSetup(){

	$('.flexslider-hero').flexslider({	
	      animation: 'fade',
	      controlsContainer: '.flexslider-controls',	      
	      slideshowSpeed: 8000,           
		  animationSpeed: 700,
	      directionNav: false,
	      controlNav: true
	 });	 

	$('.flexslider-story').flexslider({	
	      animation: 'fade',
	      controlsContainer: '.flexslider-controls',	      
	      slideshowSpeed: 8000,           
		  animationSpeed: 500,
	      directionNav: false,
	      controlNav: true
	 }); 			 
	 	 	
}

//animate jump links
function scrollLink(destination){
	$('html,body').animate({
		scrollTop: $(destination).offset().top - 100
	},1500);
}

//open and close the menu
function menuToggle(){
	console.log('menutoggle');
	
	if($('html').hasClass('menu-closed')){
		$('#menu').removeClass('closed');
		$('#menu').addClass('open');
		$('html').removeClass('menu-closed');
		$('html').addClass('menu-open');
	}
	
	else if($('html').hasClass('menu-open')){
		$('#menu').removeClass('open');
		$('#menu').addClass('closed');
		$('html').removeClass('menu-open');
		$('html').addClass('menu-closed');
	}
	
}


//measure, resize, and adjust the viewport
function view(){
	
	ch = $(window).height();
	cw = $(window).width();
	ph = ch - 130;
	fw = cw*.5;
	storyHeight = cw/3;
	storyVideoHeight = ch - 110;
	
	if($(window).width() >= 768){		


		$('.block.half').css('height',ch/2);
		$('.block.golden-max').css('max-height',ch*.72);		
		$('.block.sixty').css('height',ch*.69);										
		$('.block.full').css('height',ch+60);	
		$('.block.min').css('min-height',ch);				
		$('.block.min-large').css('min-height',ch);	
		$('.block.three-quarter').css('height',ph);	
		$('.block.three-quarter-max').css('max-height',ph);		
		//$('.flexslider-hero').css('height',fw);																									
	}
	else{

		$('.block.half').css('height',ch/2);
		$('.block.golden-max').css('max-height',ch*.70);		
		$('.block.full').css('height',ch+60);	
		$('.block.min').css('min-height',ch);							
		$('.block.min-large').css('min-height','none');	
		$('.block.three-quarter').css('height',ph);			
		$('.block.three-quarter-max').css('max-height',ph);	
		//$('.flexslider-hero').css('height',fw);																															
	}

	$('.home .slides').css('height',ch-240);
	
	if(!loaded){
		loadPage();
	}		

}

//once all elements are sized, slideshows initialized, fade in the content
function loadPage(){
	loaded = true;
	
	flexsliderSetup();

	setTimeout(function(){
		$('.loading').addClass('loaded');
		$('.landing').removeClass('landing').addClass('landed');
		view();
		if ( $('.spy').length > 0 ) { $(document).trigger('spy-init'); }	
	},500);	
		
}

$(window).scroll(function() { 

	if( !$('html').hasClass('menu-open') ) {

			if($('body').hasClass('home')){	
		
			var after = $('body').offset().top + 40;
			       
			if(76087066 >= after && $("body").hasClass('before')){
				$("body").removeClass('before').addClass('after');
			} 
			else if($(this).scrollTop() < after && $("body").hasClass('after')){
				$("body").removeClass('after').addClass('before');	
			} 
		
		}

	}

});//end window.scroll


$(document).on('spy-init', function() {

	var current = undefined;
	var previousBodyClass;

	spied = {};

	$('.spy .target:not(.exclude)').each( function( i,d ) { 
		spied[ $(d).attr('id') ] = true;
	});
	/**
	 * When spying on the state of the page, we're interested in:
	 * the currently-viewed element. (and performing actions on it).
	 * at any point we can:
	 * jump to
	 */

	 $(document).on('spy-recalculate', function() {
	 	decideActive(  $('.block.target:in-viewport'));
	 });

	 $(document).on('spy-repaint', function( event, d ) {
	 	if ( current != d ) {
	 		var c = $(current);
	 		    d = $( d );
	 		
	 		var b = $('body');
	 		var bodyClass = 'block-active-' + d.attr('id');

	 		b.removeClass(previousBodyClass);
	 		c.removeClass('active');
	 		d.addClass('active').addClass('activated');
	 		b.addClass(bodyClass);
	 		previousBodyClass = bodyClass;

	 		current = d;
	 	}
	 })


	 $(window).on('scroll', function() {
	 	if( !$('html').hasClass('menu-open') ) {	
	 		$(document).trigger('spy-recalculate');
	 	}
	 });

	 $(document).trigger('spy-recalculate');

	 function decideActive( candidates ) {
	 	/**
		 * Let's define an element as "active" if its body is intersecting the
		 * centerpoint of the page. Let's compute the current centerpoint, and 
		 * iterate across the blocks that are in view, decide which ones are active,
		 * and trigger the desired action on them.
		 */


		var w = $(window), doc = $(document);
		var centerline = w.scrollTop() + (w.height() / 3);

		candidates.each( function( i,d ) {
			d = $( d );

			if ( d.offset().top < centerline && (d.offset().top + d.height()) > centerline ) {
 				var s = $('.spy');

 				doc.trigger('spy-repaint', d);

 				if ( $('.spy').hasClass('falloff') && d.is( $('.falloff-link').attr('href') ) ) {
 					s.addClass('off');
 				} else {
 					s.removeClass('off');
 				}
 			}
		});
	 }

	 //currently unused
	 function decideOffset() {
	 	var w = $(window);
	 	return 0;
	 	//return ($('body').hasClass('home')) ? ((w.width() < 768) ? 350 : (w.height() / 2)) : 80;
	 }
});

function scrollStart(){
	
}

