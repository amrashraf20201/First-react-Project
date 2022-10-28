jQuery( document ).ready( function( $ ) {
    'use strict';

	//// ---> Check issue element
	jQuery.fn.exists = function() {
	  return jQuery(this).length;
	}
	
	if($('.homeV2SliderWrap').exists()){
		var homeV2Slider = $('.homeV2SliderWrap').bxSlider({
			mode:"fade",
			auto:true,
			speed:700,
			pause:4000,
			onSlideAfter: function(){
				var gcs = homeV2Slider.getCurrentSlide();
				$('.homeV2SliderWrap').find('.homeV2SliderItem[data-slide="'+gcs+'"]').find(".homeV1PostDesc").each(function(){
					var contentHeight = $(this).height();
					contentHeight = (contentHeight * -1) / 2;
					$(this).css("margin-top",contentHeight);
				});
		        $('.homeV2SliderWrap').find('.homeV2SliderItem:not(li[data-slide="'+gcs+'"])').removeClass("active");
				$('.homeV2SliderWrap').find('.homeV2SliderItem[data-slide="'+gcs+'"]').addClass("active");
		    }
		});
	}

	if($('.twitterWidgetSlider').exists()){
		var twitterWidgetSlider = $('.twitterWidgetSlider').bxSlider({
			mode:"fade",
			controls: false,
			auto:true,
			speed:500,
			pause:3000
		});
	}

	$(".searchIcon").on("click", function(){
		$(".searchPopup").addClass("show").find('input[type="text"]').focus();
	});

	$(".closeBtn").on("click", function(){
		$(this).closest(".searchPopup").removeClass("show");
	});

	$(".homeV1PostDesc, .relatedPostDesc").each(function(){
		var contentHeight = $(this).height();
		contentHeight = (contentHeight * -1) / 2;
		$(this).css("margin-top",contentHeight);
	});

	$(window).resize( function(e) {
		$(".homeV1PostDesc, .relatedPostDesc").each(function(){
			var contentHeight = $(this).height();
			contentHeight = (contentHeight * -1) / 2;
			$(this).css("margin-top",contentHeight);
		});
	});

	$('.showMobileMenu').on("click", function(e){
		e.preventDefault();
		$(this).toggleClass('open').closest("body").toggleClass('animated');
	});

	$(window).load(function() {
        if($('.masonryBox').exists()){
			$(".masonryBox").masonry({
				gutter: 30,
				itemSelector: '.blogPostItem'
			});	
		}
		$(".masonryBox").addClass("show");
    });

});