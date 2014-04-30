if (typeof jQuery !== 'undefined') {
	(function($) {
		$('#spinner').ajaxStart(function() {
			$(this).fadeIn();
		}).ajaxStop(function() {
			$(this).fadeOut();
		});
	})(jQuery);
}

$.backstretch("http://cdn.soruonline.com/img/bg1.jpg", {speed: 500});
$('.cropme').simpleCropper();

function show(obj) {
		    var el = document.getElementById(obj);
		    el.style.display = 'block';
		}

$(document).ready(function() {
 	$('textarea[id^="textarea_"]').maxlength({
		alwaysShow: true,
     		warningClass: 'label label-warning',
     		limitReachedClass: 'label label-success'
     	});
});



