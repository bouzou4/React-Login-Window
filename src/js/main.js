// protect the namespace!
var scriptsJS = (function($){

function helloWorld() {
	$('body').html('<h1 class="jumbotron">Hello World</h1>');
}


//  ==========================================================================
//  Init
//  ==========================================================================	
function init(){
	$(document).ready(function(){
		// helloWorld();
	});
}

// PUBLIC METHODS
	return {
		init: init
	};

})(jQuery);

scriptsJS.init();