 
$(document).ready(function() {

	$("body").addClass("loaded");

	$(function () {
		$('a[rel="lightbox"]').fluidbox();
	})


});

if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    $('#subtitle-pc').hide();
    $('#subtitle-mac').show();
} else {
	$('#subtitle-mac').hide();
    $('#subtitle-pc').show();
    
}

$("video").prop('muted', true);


var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("demo").innerHTML = days[d.getDay()];
