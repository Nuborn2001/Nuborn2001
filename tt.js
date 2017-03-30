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

		tooltips[0]=["https://a.wattpad.com/cover/91184447-256-k563150.jpg", "", {background:"#FFFFFF", color:"black", border:"5px #3B5998", width:"400px"}]
		tooltips[1]=["https://a.disquscdn.com/uploads/mediaembed/images/2385/2957/original.jpg", "", {background:"#FFFFFF", width:"400px"}]
		tooltips[2]=["https://www.wattpad.com/338132183-the-immortal-articles-discipline"]
		tooltips[3]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMjI0MDQyMTU1OF5BMl5BanBnXkFtZTcwODc5Njg3Nw%40%40._V1_SY317_CR0%2C0%2C214%2C317_.jpg", {background:"white", font:"bold 12px Arial"}]
        tooltips[6]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMTAyOTc4OTg2MzJeQTJeQWpwZ15BbWU3MDk0NzgyNzg%40._V1_SY317_CR4%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", color:"black", border:"5px #3B5998"}]
		tooltips[10]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt0905372.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[11]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/cover-1231417-Good-Deeds-movie2k-film.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[12]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt1499658.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[13]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/url.gif", "", {background:"#FFFFFF", width:"0px"}]
		tooltips[000]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMjE0ODk2NjczOV5BMl5BanBnXkFtZTYwNDQ0NDg4._V1._SY317_CR4%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[15]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTQ1NzE3MzY0NV5BMl5BanBnXkFtZTYwNTM2MzE5._V1._SY317_CR6%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[16]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[17]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTQ4MjY2MjMzOV5BMl5BanBnXkFtZTcwMDUxNzIwOQ%40%40._V1._CR43%2C43.16667175292969%2C1298%2C1960.9999542236328_SX214_.jpg", "After R (a highly unusual zombie) saves Julie from an attack, the two form a relationship that sets in motion a sequence of events that might transform the entire lifeless world.", {background:"#ebeef4", width:"214px"}]
		tooltips[18]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTkxMTE3NzEzMl5BMl5BanBnXkFtZTcwMzc4MTU2Mw%40%40._V1_SX214_.jpg", "A writer who is brutalized during her cabin retreat seeks revenge on her attackers, who left her for dead.", {background:"#ebeef4", width:"214px"}]
		tooltips[19]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjEyNjI1OTEzOV5BMl5BanBnXkFtZTcwNTI3NzYxOQ%40%40._V1._CR33%2C35.16667175292969%2C1411%2C1979.9999542236328_SY317_CR7%2C0%2C214%2C317_.jpg", "Wren's Halloween plans go awry when she's made to babysit her brother, who disappears into a sea of trick-or-treaters. With her best friend and two nerds at her side, she needs to find her brother before her mom finds out he's missing.", {background:"#ebeef4", width:"214px"}]
		tooltips[20]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw%40%40._V1._SY317_.jpg", "A snobbish investor and a wily street con artist find their positions reversed as part of a bet by two callous millionaires.", {background:"#FFFFFF", width:"90px"}]
		tooltips[21]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/Chronicle-watch-movie-1213915.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[22]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt1735898.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[23]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMjAxODQ1MTEyMl5BMl5BanBnXkFtZTcwNjU3NzM0OA%40%40._V1_SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[24]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt1231583.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[25]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw%40%40._V1_SX214_.jpg", "Journalist Mikael Blomkvist is aided in his search for a woman who has been missing for forty years by Lisbeth Salander, a young computer hacker.", {background:"#ebeef4", width:"214px"}]
		tooltips[26]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt1506999.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[27]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]

	
	
	
	
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
