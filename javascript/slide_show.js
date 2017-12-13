$(document).ready(function() {
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;

	// the function for running the slide show
	var runSlideShow = function() {
        $("#caption").fadeOut(3000);
        $("#slide").fadeOut(3000,
        	function () {
        		// if we are at the end of the slideshow, go back to the first slide
				// (#slides img:first-child is the CSS selector that correspond to the
				//   first image in your hidden div with id="slides")
       	     	if (nextSlide.next().length == 0) {
					nextSlide = $("#slides img:first-child");
				}
				else { // otherwise, load the next slide
					nextSlide = nextSlide.next();
				}
				nextSlideSource = nextSlide.attr("src");
				nextCaption = nextSlide.attr("alt");
				$("#slide").attr("src", nextSlideSource).fadeIn(5000);
				$("#caption").text(nextCaption).fadeIn(5000);
			}
		)
	}

	// start slide show
    var timer1 = setInterval(runSlideShow, 3000);

    // start and stop the slide show
	// but the toggle event method has been removed from jQuery 1.9
	/*
	$("#slide").toggle(
		function() {
		    clearInterval(timer1);
		},
		function() {
			timer1 = setInterval(runSlideShow, 3000);
		}
	)
	*/

	// here's one way to code this app without using the toggle event method
	$("#slide").click(function() {
		if (timer1 != null) {
	    	clearInterval(timer1);
	    	timer1 = null;
		}
		else {
			timer1 = setInterval(runSlideShow, 1000);
		}
	});

})