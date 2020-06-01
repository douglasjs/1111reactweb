jQuery(document).ready(function($) {
	var canvasWrapper = $(".off-canvas-wrapper");
	$('.slicknav_nav li').on('click', function() {
            canvasWrapper.removeClass('active');
            $("body").removeClass('fix');
        });	
});