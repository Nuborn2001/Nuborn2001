var conf={'key':null,'logo':{'url':'http://www.shegotass.info/templates/default-black-orange/images/logo.png','fullscreenOnly':false,'top':0,'left':0,'bottom':20,'right':5},'default':{'autoPlay':false,'autoBuffering':true,'bufferLength':3,'scaling':'scale','url':'http://shegotass.info:81/secflv/08f9dd563a67c66a9c63c289bcd0a6c5/501184a1/4ca4238a0b/13277377811257943446.mp4','provider':'lighttpd','onBegin':function(clip){if(clip.isInStream){this.getPlugin("textAdv").hide();this.getPlugin("imageAdv").hide();}},},'canvas':{'backgroundColor':'#000000','backgroundGradient':'none'},'skins':{'url':'http://www.shegotass.info/modules/video/player/flowplayer.controls-3.2.5.swf','autoHide':{'enabled':false},'backgroundColor':'#','backgroundGradient':'none','buttonColor':'#ff6600','buttonOverColor':'#542303','bufferColor':'#ff6600','bufferGradient':'none','timeColor':'#ff6600','timeBgColor':'#000000','durationColor':'#ffffff','sliderColor':'#000000','sliderGradient':'none','progressColor':'#ffffff','progressGradient':'none','volumeSliderColor':'#000000','volumeSliderGradient':'none','borderRadius':'0px','tooltipColor':'#FF6600','tooltipTextColor':'#ffffff','height':30,'opacity':1.0,'play':true,'volume':true,'mute':true,'time':true,'stop':false,'playlist':false,'fullscreen':true,'tooltips':{'buttons':true,'play':'Play','pause':'Pause','stop':'Stop','mute':'Mute','unmute':'Unmute','fullscreen':'Fullscreen','fullscreenExit':'Exit Fullscreen','next':'Next','previous':'Previous'}},'plugins':{'imageAdv':{'url':'http://www.shegotass.info/modules/video/player/flowplayer.content-3.2.0.swf','display':'none','top':5,'width':450,'height':350,'closeButton':true,'style':{'border':0,'backgroundColor':'#000000'},'onClick':function(){this.hide();}},'textAdv':{'url':'http://www.shegotass.info/modules/video/player/flowplayer.content-3.2.0.swf','display':'none','bottom':35,'width':600,'height':65,'closeButton':true,'backgroundGradient':'low','style':{'border':0,'backgroundColor':'#000000','.title':{'fontSize':15,'fontWeight':'bold','textDecoration':'underline'},'.link':{'fontSize':13,'fontWeight':'bold','color':'#DFDFDF',},},'onClick':function(){this.hide();}},'lighttpd':{'url':'http://www.shegotass.info/modules/video/player/flowplayer.pseudostreaming-3.2.7.swf'}}}