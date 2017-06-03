/* Image w/ description tooltip v2.0
* Created: April 23rd, 2010. This notice must stay intact for usage 
* Author: Dynamic Drive at http://www.dynamicdrive.com/
* Visit http://www.dynamicdrive.com/ for full source code
*/


var ddimgtooltip={

	tiparray:function(){
		var tooltips=[]
		//define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
		//For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
		//For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}

		tooltips[0]=["https://a.wattpad.com/cover/91184447-256-k563150.jpg", "", {background:"#FFFFFF", color:"black", border:"5px #3B5998", width:"310px"}]
		tooltips[1]=["https://a.wattpad.com/cover/91184447-256-k563150.jpg", "", {background:"#FFFFFF", width:"400px"}]
		tooltips[2]=["https://a.wattpad.com/cover/91184447-256-k563150.jpg", "", {background:"#FFFFFF", width:"400px"}]

		tooltips[3]=["https://nuborn2001.github.io/flix/59194144098f7.mp4_splash.jpg", "", {background:"#FFFFFF", width:"400px"}]
        tooltips[4]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMTAyOTc4OTg2MzJeQTJeQWpwZ15BbWU3MDk0NzgyNzg%40._V1_SY317_CR4%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", color:"black", border:"5px #3B5998"}]
		tooltips[5]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt0905372.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[6]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/cover-1231417-Good-Deeds-movie2k-film.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[7]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt1499658.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[8]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/url.gif", "", {background:"#FFFFFF", width:"0px"}]
		tooltips[9]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMjE0ODk2NjczOV5BMl5BanBnXkFtZTYwNDQ0NDg4._V1._SY317_CR4%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[10]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTQ1NzE3MzY0NV5BMl5BanBnXkFtZTYwNTM2MzE5._V1._SY317_CR6%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[11]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]

	
	
	
		return tooltips //do not remove/change this line
	}(),

	tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips

	//***** NO NEED TO EDIT BEYOND HERE

	tipprefix: 'imgtip', //tooltip ID prefixes

	createtip:function($, tipid, tipinfo){
		if ($('#'+tipid).length==0){ //if this tooltip doesn't exist yet
			return $('<div id="' + tipid + '" class="ddimgtooltip" />').html(
			
				'<div style="text-align:center"><img src="' + tipinfo[0] + '" /></div>'
				+ ((tipinfo[1])? '<div style="text-align:left; margin-top:5px">'+tipinfo[1]+'</div>' : '')
				)
			.css(tipinfo[2] || {})
			.appendTo(document.body)
		}
		return null
	},

	positiontooltip:function($, $tooltip, e){
		var x=e.pageX+this.tooltipoffsets[0], y=e.pageY+this.tooltipoffsets[1]
		var tipw=$tooltip.outerWidth(), tiph=$tooltip.outerHeight(), 
		x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(ddimgtooltip.tooltipoffsets[0]*2) : x
		y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
		$tooltip.css({left:x, top:y})
	},
	
	showbox:function($, $tooltip, e){
		$tooltip.show()
		this.positiontooltip($, $tooltip, e)
	},

	hidebox:function($, $tooltip){
		$tooltip.hide()
	},


	init:function(targetselector){
		jQuery(document).ready(function($){
			var tiparray=ddimgtooltip.tiparray
			var $targets=$(targetselector)
			if ($targets.length==0)
				return
			var tipids=[]
			$targets.each(function(){
				var $target=$(this)
				$target.attr('rel').match(/\[(\d+)\]/) //match d of attribute rel="imgtip[d]"
				var tipsuffix=parseInt(RegExp.$1) //get d as integer
				var tipid=this._tipid=ddimgtooltip.tipprefix+tipsuffix //construct this tip's ID value and remember it
				var $tooltip=ddimgtooltip.createtip($, tipid, tiparray[tipsuffix])
				$target.mouseenter(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.showbox($, $tooltip, e)
				})
				$target.mouseleave(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.hidebox($, $tooltip)
				})
				$target.mousemove(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.positiontooltip($, $tooltip, e)
				})
				if ($tooltip){ //add mouseenter to this tooltip (only if event hasn't already been added)
					$tooltip.mouseenter(function(){
						ddimgtooltip.hidebox($, $(this))
					})
				}
			})

		}) //end dom ready
	}
}

//ddimgtooltip.init("targetElementSelector")
ddimgtooltip.init("*[rel^=imgtip]")
