/*MAIN MENU*/
function addMainNavClass(curClass) {
	if ($.browser.msie && $.browser.version.substr(0, 1) < 7) {
		return (curClass.indexOf("ie6hover") == -1) ? curClass + " ie6hover" : curClass;
	}
	return curClass;
}
function removeMainNavClass(curClass) {
	if ($.browser.msie && $.browser.version.substr(0, 1) < 7) {
		return (curClass.indexOf("ie6hover") == -1) ? curClass : curClass.split(" ie6hover").join("");
	}
	return curClass;
}
$(function() {
	$('ul#nav li ul').hide();
	$('#nav li').hover(function() {
		$('ul', this).css('display', 'block');
		$('a.top', this).attr("class", addMainNavClass($('a', this).attr("class")));
	}, function() {
		$('ul', this).css('display', 'none');
		$('a.top', this).attr("class", removeMainNavClass($('a', this).attr("class")));
	});
});
/*INLINE LABELS*/
$(function() {
	$('input[title]').each(function() {
		if($(this).val() === '') {
			$(this).val($(this).attr('title'));	
								}
									
	$(this).focus(function() {
		if($(this).val() == $(this).attr('title')) {
			$(this).val('');	
						}
	});
									
	$(this).blur(function() {
		if($(this).val() === '') {
			$(this).val($(this).attr('title'));	
			}
	});
});
});

/*FOOTER YEAR*/
//$(function(){$("#year").html(new Date().getFullYear());});

/*HOMEPAGE MAIN SLIDER*/
$(function(){$('#slider').cycle({fx: 'scrollHorz', pager:'.pager', next: '.next', prev: '.prev', speed:000, timeout:5000, pause:1});});

var naInit = true;
//**New Arrivals Slider
function onAfter(curr, next, opts) {
    var index = (naInit) ? opts.currSlide : opts.nextSlide;
    $('#prev-na')[index == 0 ? 'hide' : 'show']();
    $('#next-na')[index == opts.slideCount - 1 ? 'hide' : 'show']();
    naInit = false;
}
$(function() {$('#slider-na').cycle({fx:'scrollHorz',  prev:'#prev-na', next:'#next-na', before:onAfter, timeout: 0});});

var mpInit = true;
//**Most Popular Slider
function onAftermp(curr, next, opts) {
	var index = (mpInit) ? opts.currSlide : opts.nextSlide;
	$('#prev-mp')[index == 0 ? 'hide' : 'show']();
    $('#next-mp')[index == opts.slideCount - 1 ? 'hide' : 'show']();
    mpInit = false;
}
$(function() {$('#slider-mp').cycle({fx:'scrollHorz',  prev:'#prev-mp', next:'#next-mp', before:onAftermp, timeout: 0});});

var bInit = true;
//**Most Popular Slider
function onAfterBrowse(curr, next, opts) {
    var index = (bInit) ? opts.currSlide : opts.nextSlide;
    $('#prev-browse')[index == 0 ? 'hide' : 'show']();
    $('#next-browse')[index == opts.slideCount - 1 ? 'hide' : 'show']();
    bInit = false;
}
$(function() { $('#slider-browse').cycle({ fx: 'scrollHorz', prev: '#prev-browse', next: '#next-browse', before: onAfterBrowse, timeout: 0 }); });

//**New Arrivals Slider
function onAfter(curr, next, opts) {
    var index = (naInit) ? opts.currSlide : opts.nextSlide;
    $('#prev-na2')[index == 0 ? 'hide' : 'show']();
    $('#next-na2')[index == opts.slideCount - 1 ? 'hide' : 'show']();
    naInit = false;
}
$(function() {$('#slider-na2').cycle({fx:'scrollHorz',  prev:'#prev-na2', next:'#next-na2', before:onAfter, timeout: 0});});

var mpInit = true;
//**Most Popular Slider
function onAftermp(curr, next, opts) {
	var index = (mpInit) ? opts.currSlide : opts.nextSlide;
	$('#prev-mp2')[index == 0 ? 'hide' : 'show']();
    $('#next-mp2')[index == opts.slideCount - 1 ? 'hide' : 'show']();
    mpInit = false;
}
$(function() {$('#slider-mp2').cycle({fx:'scrollHorz',  prev:'#prev-mp2', next:'#next-mp2', before:onAftermp, timeout: 0});});

var bInit = true;
//**Most Popular Slider
function onAfterBrowse(curr, next, opts) {
    var index = (bInit) ? opts.currSlide : opts.nextSlide;
    $('#prev-browse2')[index == 0 ? 'hide' : 'show']();
    $('#next-browse2')[index == opts.slideCount - 1 ? 'hide' : 'show']();
    bInit = false;
}
$(function() { $('#slider-browse2').cycle({ fx: 'scrollHorz', prev: '#prev-browse2', next: '#next-browse2', before: onAfterBrowse, timeout: 0 }); });

var bInit = true;
//**Most Popular Slider
function onAfterBrowse(curr, next, opts) {
    var index = (bInit) ? opts.currSlide : opts.nextSlide;
    $('#prev-browse3')[index == 0 ? 'hide' : 'show']();
    $('#next-browse3')[index == opts.slideCount - 1 ? 'hide' : 'show']();
    bInit = false;
}
$(function() { $('#slider-browse3').cycle({ fx: 'scrollHorz', prev: '#prev-browse3', next: '#next-browse2', before: onAfterBrowse, timeout: 0 }); });

//**Most Popular Slider
function onAftermp(curr, next, opts) {
	var index = (mpInit) ? opts.currSlide : opts.nextSlide;
	$('#prev-mp3')[index == 0 ? 'hide' : 'show']();
    $('#next-mp3')[index == opts.slideCount - 1 ? 'hide' : 'show']();
    mpInit = false;
}
$(function() {$('#slider-mp3').cycle({fx:'scrollHorz',  prev:'#prev-mp3', next:'#next-mp3', before:onAftermp, timeout: 0});});

//**Most Popular Slider
function onAftermp(curr, next, opts) {
	var index = (mpInit) ? opts.currSlide : opts.nextSlide;
	$('#prev-mp4')[index == 0 ? 'hide' : 'show']();
    $('#next-mp4')[index == opts.slideCount - 1 ? 'hide' : 'show']();
    mpInit = false;
}
$(function() {$('#slider-mp4').cycle({fx:'scrollHorz',  prev:'#prev-mp4', next:'#next-mp4', before:onAftermp, timeout: 0});});

//**Most Popular Slider
function onAftermp(curr, next, opts) {
	var index = (mpInit) ? opts.currSlide : opts.nextSlide;
	$('#prev-mp5')[index == 0 ? 'hide' : 'show']();
    $('#next-mp5')[index == opts.slideCount - 1 ? 'hide' : 'show']();
    mpInit = false;
}
$(function() {$('#slider-mp5').cycle({fx:'scrollHorz',  prev:'#prev-mp5', next:'#next-mp5', before:onAftermp, timeout: 0});});


//for video detail hover box
function showDetails(videoId, e, pos) {
    $.getJSON("/ajax/videodetails.aspx?uid=" + videoId, function (data) {
        var hover = $(".DetailHover");
        $(hover).css("z-index", 1199000);
        $(hover).css("display", "block");
        $(hover).css("left", (pos.x + 40) + "px");
        $(hover).css("top", (pos.y - 95) + "px");
        $(".mTitle").html(HandleBadChars(data.video.mTitle));
        $(".mDuration").html(HandleBadChars(data.video.mDuration));
        $(".mLanguage").html(HandleBadChars(data.video.mLanguage));
        $(".mShortDescription").html(HandleBadChars(data.video.mShortDescription));
        var genres = HandleBadChars(data.video.mGenres);
        $(".mGenres").html(genres);
        if (genres.indexOf("school") > -1 || genres.indexOf("School") > -1) {
            $(".detailSchool").css("display", "block");
            $(".mSchool").html(HandleBadChars(data.video.mSchool));
        } else {
            $(".mRating").html(HandleBadChars(data.video.mRating));
        }
        $(".mDirector").html(HandleBadChars(data.video.mDirector));
        $(".mCast").html(unescape(data.video.mCast));
        //set arrow to vertical center
        var height = ($(hover).height()) + 64;
        $(".DHArrow").css("top", height + "px");
    });
}

function HandleBadChars(val) {
	return unescape(val.split("(colon)").join(":"));
}

//function that hides hover details
function hideDetails() {
	var hover = $(".DetailHover");
	$(hover).css("display", "none");
}

//function that activates hover links
function activateDetailLinks() {
	var setHover;

	//on link hover delay for 1 second then show so it's not jumpy
	$("#browse a.hoverLink, .slide ul li a.hoverLink").hover(function(e) {
		var videoId = "";
		try {
			videoId = $(this).attr("rel");
		} catch (ex) { }
		var parent = $(this).parents("li");
		var pos = { x: $(parent).offset().left, y: $(parent).offset().top };
		//if it's last then switch it around
		if ($(parent).attr("class").indexOf("last") == -1) {
			pos.x = pos.x + 73;
			$(".DetailHover").attr("class", "DetailHover HoverRight");
		} else {
			pos.x = pos.x - 409;
			$(".DetailHover").attr("class", "DetailHover HoverLeft");
		}
		pos.y = pos.y + 80;
		//hesitate to display it
		setHover = setInterval(function() {
			showDetails(videoId, e, pos)
		}, 800);
	}, function() {
		//clear hesitation so it doesn't show up after you scroll off
		clearInterval(setHover);
		hideDetails();
	});
}
//activate hover links on load
$(function() {
	activateDetailLinks();
});

//Ajax calls for browse data
function getContent(getUrl) {
	hideDetails();
	jQuery.ajax({
		url: getUrl,
		beforeSend: function(data) {
			jQuery(".ajax-loader").css("display", "block");
			jQuery(".options a").each(function() {
				jQuery(this).attr("disabled", "disabled");
				var className = jQuery(this).attr("class");
				if (className.indexOf("inactive") == -1) {
					jQuery(this).attr("class", className + " inactive");
				}
			});
		},
		success: function(data) {
			jQuery("#browse-box").html(data);
			jQuery(".ajax-loader").css("display", "none");
		}
	});
}