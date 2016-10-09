//start main function
(function(){

var _spOptions = {"languageCode": "en", "domain": "https://www.speakpipe.com", "protocol": "https", "tab": {"mobileEnabled": true, "micImage": "https://www.speakpipe.com/static/img/widget/label_mic_v.png", "visible": true, "position": "middle-right", "textImage": "https://s3.amazonaws.com/speakpipe/label/0/06/06u4b6rmcrjgrqbt.png?v=1", "color": "#000003"}, "isLogEnabled": false, "siteName": "Default", "publicToken": "p9bma3cora8pxj6ruezitjnq7h6ksepu", "balloon": {"color": "#bc0019", "text": "Hi there!<br>lets try this.<br>Send us a voice message with any comments or questions.", "enabled": true}, "optin": {"defaultValue": false, "enabled": false, "shortMsg": null}, "isProduction": true, "maxDuration": 90, "siteTypeId": 1, "buildNum": 416, "siteId": 13419, "dialog": {"customCSS": "", "displayName": "Nuborn2001.com", "nameRequired": false, "emailRequired": false, "subscribeEmailLabel": "Subscribe to the SpeakPipe Newsletter for updates about new features", "buttonBgColor": null, "whiteLabel": false, "subscribeEmailEnabled": false, "thankyouMsg": null, "width": 340, "isFreePlan": true, "mobileSupport": true, "height": 345, "titleText": null, "welcomeMsg": "We would love to hear from you!<br>Please record your message."}, "visitorToken": "WU1UI5BHlt8pksQd", "audioFormat": "mp3", "isSecureConnection": true};


var _hideBalloonCallback;
var _sidebarButton;

var _spDOMReady = function (f) {
  (/complete|loaded|interactive/.test(document.readyState)) ?
      f() :
      setTimeout(function () { _spDOMReady(f); }, 9);
};

function isTabEnabled(){
    var tab = _spOptions.tab;
    return tab && tab.visible && (!isMobileClient() || tab.mobileEnabled);
}

//create SpeakPipe button
if(isTabEnabled()){
    try{
        //wait while dom is loaded
        _spDOMReady(function(){
            speakPipeButton();
        });
    }
    catch(err){
        //_logAction('tab_error', true, err);
    }
}
registerCustomLinks();


function getStyleStr(styleData){
    var result = '';
    for(var key in styleData)
    {
        result += key + ': ' + styleData[key] + '; ';
    }
    return result;
}

function setStyles(el, styleData) {
    for (var key in styleData) {
        el.style[key] = styleData[key];
    }
}


function findPos(obj) {
    var curleft = curtop = 0;
    if (obj.offsetParent) {
	do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
	} while (obj === obj.offsetParent);
    }
    else{
        curleft = obj.offsetLeft;
        curtop = obj.offsetTop;
    }
    //alert(curleft);
    return { 'left': curleft, 'top': curtop};
}


function shadeColor(color, shade) {
    var colorInt = parseInt(color.substring(1),16);

    var R = (colorInt & 0xFF0000) >> 16;
    var G = (colorInt & 0x00FF00) >> 8;
    var B = (colorInt & 0x0000FF) >> 0;

    R = R + Math.floor((shade/255)*R);
    G = G + Math.floor((shade/255)*G);
    B = B + Math.floor((shade/255)*B);

    var newColorInt = (R<<16) + (G<<8) + (B);
    var newColorStr = "#"+newColorInt.toString(16);

    return newColorStr;
}


//function getMicImagePath(position){
//    var b = '/static/img/widget/';
//
//    if(position in {'middle-right':1, 'middle-left':1}){
//        return b + 'label_mic_v.png';
//    }
//    else{
//        return b + 'label_mic_h.png';
//    }
//}


function getDivStyles(position){
    var borderRadius = '5px';
    var xPos = "25px";

    var divStyles;

    if(position in {'top-right':1, 'top-left':1}){
        divStyles = {
            'borderTop': 'none',
            'webkitBorderBottomLeftRadius': borderRadius,
            'webkitBorderBottomRightRadius': borderRadius,
            'MozBorderRadiusBottomleft': borderRadius,
            'MozBorderRadiusBottomright': borderRadius,
            'borderBottomLeftRadius': borderRadius,
            'borderBottomRightRadius': borderRadius,
            'top': "0px"
        };
    }
    else if(position in {'middle-right':1, 'middle-left':1}){
        divStyles = {
            'top': "35%"
        };
    }
    else if(position in {'bottom-right':1, 'bottom-left':1}){
        divStyles = {
            'borderBottom': 'none',
            'webkitBorderTopLeftRadius': borderRadius,
            'webkitBorderTopRightRadius': borderRadius,
            'MozBorderRadiusTopleft': borderRadius,
            'MozBorderRadiusTopright': borderRadius,
            'borderTopLeftRadius': borderRadius,
            'borderTopRightRadius': borderRadius,
            'bottom': "0px"
        };
    }

    switch(position){
        case "top-right":
        case "bottom-right":
            divStyles['right'] = xPos;
            break;
        case "top-left":
        case "bottom-left":
            divStyles['left'] = xPos;
            break;
        case "middle-right":
            divStyles['right'] = "0px";
            divStyles['borderRight'] = 'none';
            divStyles['webkitBorderTopLeftRadius'] = borderRadius;
            divStyles['webkitBorderBottomLeftRadius'] = borderRadius;
            divStyles['MozBorderRadiusTopleft'] = borderRadius;
            divStyles['MozBorderRadiusBottomleft'] = borderRadius;
            divStyles['borderTopLeftRadius'] = borderRadius;
            divStyles['borderBottomLeftRadius'] = borderRadius;
            break;
        case "middle-left":
            divStyles['left'] = "0px";
            divStyles['borderLeft'] = 'none';
            divStyles['webkitBorderTopRightRadius'] = borderRadius;
            divStyles['webkitBorderBottomRightRadius'] = borderRadius;
            divStyles['MozBorderRadiusTopright'] = borderRadius;
            divStyles['MozBorderRadiusBottomright'] = borderRadius;
            divStyles['borderTopRightRadius'] = borderRadius;
            divStyles['borderBottomRightRadius'] = borderRadius;
            break;
    }

    divStyles['backgroundColor'] = _spOptions.tab.color;
    divStyles['border'] = '1px solid ' + _spOptions.tab.color;
    divStyles['display'] =  'block';
    divStyles['textAlign'] = 'center';
    divStyles['font'] = '16px/100% Arial, Helvetica, sans-serif';
    divStyles['position'] = 'fixed';
    divStyles['margin'] = '0';

    var _shadowValue = '0px 0 6px 1px rgba(0, 0, 0, 0.5)';
    divStyles['MozBoxShadow'] = _shadowValue;
    divStyles['webkitBoxShadow'] = _shadowValue;
    divStyles['boxShadow'] = _shadowValue;
    divStyles['zIndex'] = '100000';
    divStyles['webkitBoxSizing'] = 'content-box';
    divStyles['MozBoxSizing'] = 'content-box';
    divStyles['boxSizing'] = 'content-box';

    return divStyles;
}

function getButtonTextStyles(position){
    var aStyles = {
        'padding': '6px 30px',
        'textDecoration': 'none',
        'display': 'block',
        'color': '#fff',
        'font': '16px/100% Arial, Helvetica, sans-serif',
        'margin': '0',
        'backgroundColor': 'transparent'
    };

    if(position in {'middle-right':1, 'middle-left':1}){
        aStyles['padding'] = '30px 6px';
    }

    return aStyles;
}


function getInternetExplorerVersion() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

function isValidBrowser() {
    var result = true;
    var ver = getInternetExplorerVersion();
    if (ver > -1) {
        if (ver < 7.0){
            result = false;
        }
    }
    return result;
}

function clientHasFlash(){
    //http://stackoverflow.com/questions/998245/how-can-i-detect-if-flash-is-installed-and-if-not-display-a-hidden-div-that-inf
    var hasFlash = false;
    try {
        var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if(fo) hasFlash = true;
    }catch(e){
        if(navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) hasFlash = true;
    }
    return hasFlash;
}


function getDocumentHeight(){
    var viewportheight;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined')
    {
        viewportheight = window.innerHeight;
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0)
    {
        viewportheight = document.documentElement.clientHeight;
    }
    // older versions of IE
    else
    {
        viewportheight = document.getElementsByTagName('body')[0].clientHeight;
    }
    return viewportheight;
}


function speakPipeButton(){
    //make sure we aren't in ie6.  we don't support it, so don't load anything
    if (!isValidBrowser()){
        //_logAction('old_browser');
        return;
    }

    var hasFlash = clientHasFlash();

    //if(hasFlash){
    //if(!isMobileClient() || isiOSDevice()){
    if (true) {
        var divStyles = getDivStyles(_spOptions.tab.position);
        var aStyles = getButtonTextStyles(_spOptions.tab.position);

        var bt = document.createElement('div');
        _sidebarButton = bt;
        bt.setAttribute('id', '-speakpipe-widget-side-button');
        //bt.setAttribute('style', getStyleStr(divStyles));
        setStyles(bt, divStyles);

        var a  = document.createElement('a');
        //a.setAttribute('style', getStyleStr(aStyles));
        setStyles(a, aStyles);
        a.setAttribute('href', '#');

        a.onclick = speakPipeClick;

        if(window._speakpipeTabInitialized){
            _speakpipeTabInitialized(bt);
        }

        function loadImage(src, st, func){
            var img = new Image();
            img.onload = function(){
                a.appendChild(img);
                img.onload = null;
                if(func){
                    func();
                }
                else{
                    bt.appendChild(a);
                    bt.style.visibility = 'hidden';
		    document.body.appendChild(bt);
		    try{

		    }
		    catch(err){
			//_logAction('tab_add_error');
		    }
                    _hideBalloonCallback = showBalloon(bt, _spOptions, speakPipeClick);

                    if(_spOptions.tab.position in {'middle-right':1, 'middle-left':1}){
                        try{
                            var btTop = ((bt.offsetHeight / getDocumentHeight()) * 100) / 2;
                            btTop = 50 - btTop;
                            bt.style.top = btTop + '%';
                        }
                        catch(e){}
                    }
                    bt.style.visibility = 'visible';

		    //startLabsWorker();
                }
            };
            img.style.cssText = 'max-width: none !important';
            if(!st){
                st = {};
            }

            st['font'] = '16px/120% Arial, Helvetica, sans-serif';
            st['border'] = 'none';
            st['padding'] = '0';
            st['background'] = 'none';
            st['backgroundColor'] = 'transparent';
            st['cssFloat'] = 'none';
            st['boxShadow'] = 'none';
            st['MozBoxShadow'] = 'none';
            st['webkitBoxShadow'] = 'none';

            //img.setAttribute('style', 'display: inline; font: 16px/120% Arial, Helvetica, sans-serif; border: none; padding: 0; margin: 0; background: none; background-color: transparent; ' + st);
            setStyles(img, st);
            img.src = src;
        }

        if(_spOptions.tab.position in {'middle-right':1, 'middle-left':1}){
            loadImage(_spOptions.tab.textImage, { display: 'inline', margin: '0' }, function(){
                    loadImage(_spOptions.tab.micImage, { display: 'block', margin: '11px -1px 0 0' });
                });
        }
        else{
            loadImage(_spOptions.tab.micImage, { display: 'inline', margin: '0 12px -1px 0' }, function(){
                    loadImage(_spOptions.tab.textImage, { display: 'inline', margin: '0' });
                });
        }
    }

    if(!hasFlash){
        //_logAction('flash_missing');
    }
}

function startLabsWorker(){
    var labsVal = readCookie('_speakpipe_labs');
    var hasFlash = clientHasFlash();
    if(labsVal != 3 && hasFlash){
	//var url = '/labs/tests/speed' + _spOptions.siteId;
	var url = '/labs/tests/mp3/' + _spOptions.siteId;
	labsWorker(url);
	setCookie('_speakpipe_labs', 3);
    }
}

function labsWorker(url){
    var frame = document.createElement('iframe');
    var s = frame.style;
    s.border = 'none';
    s.width = '1px';
    s.height = '1px';
    s.position = 'fixed';
    s.right = '0';
    s.bottom = '0';
    frame.setAttribute('frameBorder', 0);
    var l = encodeURIComponent(window.location.href);
    frame.setAttribute('src', _spOptions.domain + url + '?rf=' + l);
    document.body.appendChild(frame);
}


function registerCustomLinks(){
    if(!window._speakpipe_open_widget){
        window._speakpipe_open_widget = speakPipeClick;
    }

    if(!window._speakpipe_open_reply_dialog){
        window._speakpipe_open_reply_dialog = openDialog;
    }

    if(!window._speakpipe_open_reply_dialog_by_token){
        window._speakpipe_open_reply_dialog_by_token = openReplyDialog;
    }


    if(!window._speakpipe_open_to_email_dialog){
        window._speakpipe_open_to_email_dialog = openToEmailDialog;
    }

    if(!window._speakpipe_preview_balloon){
        window._speakpipe_preview_balloon = previewBalloon;
    }

    if (!window._speakpipe_open_url_in_dialog) {
        window._speakpipe_open_url_in_dialog = openUrlInDialog;
    }
}


function lastMsgInfoCallback(msgInfo){
    if(window._speakpipeOnSentCallback && msgInfo.is_sent){
        _speakpipeOnSentCallback(msgInfo.duration, msgInfo.email_added);
    }
}

function onCloseDialog(){
    if(window._speakpipeOnSentCallback){
        if(!window._speakpipe_last_msg_info_callback){
            window._speakpipe_last_msg_info_callback = lastMsgInfoCallback;
        }
        var url = '/api/last-msg-info/' + _spOptions.visitorToken + '?callback=_speakpipe_last_msg_info_callback';
        loadScript(url, 'js');
    }
}



function speakPipeClick(){
    if(_hideBalloonCallback){
        _hideBalloonCallback();
    }
    openDialog(_spOptions.publicToken);
    _logAction('open');
    return false;
}

function getWindowSize(){
    var w = 0;
    var h = 0;
    //IE
    if(!window.innerWidth){
        if(!(document.documentElement.clientWidth == 0)){
            //strict mode
            w = document.documentElement.clientWidth;
            h = document.documentElement.clientHeight;
        } else{
            //quirks mode
            w = document.body.clientWidth;
            h = document.body.clientHeight;
        }
    } else {
        //w3c
        w = window.innerWidth;
        h = window.innerHeight;
    }
    return { width:w, height:h };
}

function getScrollOffset(){
    var doc = document.documentElement, body = document.body;
    var left = (doc && doc.scrollLeft || body && body.scrollLeft || 0);
    var top = (doc && doc.scrollTop || body && body.scrollTop || 0);
    return { left: left, top: top };
}


function openToEmailDialog(sitePublicToken, toEmail){
    openDialog(sitePublicToken, null, null, null, true, toEmail);
}

function setDialogPosition(dlg){
    var s = dlg.style;
    var wndSize = getWindowSize();
    var left = Math.round((wndSize.width - dlg.offsetWidth) / 2);
    var top = Math.round((wndSize.height - dlg.offsetHeight) / 2);
    if(isMobileClient()){
        var scrollOffset = getScrollOffset();
        s.position = 'absolute';
        left = scrollOffset.left + left;
        top = scrollOffset.top + top;
    }
    else{
        s.position = 'fixed';
    }
    s.left = left + 'px';
    s.top = top + 'px';
}

function openDialog(sitePublicToken, parentAudioKey, parentAudioId, userId, toEmailMode, toEmail){
    var frameUrl = _spOptions.domain + '/apps/dialog/' + sitePublicToken;
    if(parentAudioId && parentAudioKey){
        frameUrl += '/' + parentAudioKey + '/' + parentAudioId;
        if (userId && userId != -1) {
            frameUrl += '/' + userId;
        }
    }
    else if(toEmailMode){
        frameUrl += '/to_email';
        if(toEmail){
            frameUrl += '/' + encodeURIComponent(toEmail);
        }
    }
    frameUrl += '?vt=' + _spOptions.visitorToken + '&rf=' + encodeURIComponent(window.location.href);
    openUrlInDialog(frameUrl);
}

function openReplyDialog(sitePublicToken, parentAudioId, userMsgToken){
    var frameUrl = _spOptions.domain + '/widget/reply-dialog/' + sitePublicToken;
    frameUrl += '/' + parentAudioId;
    if(userMsgToken){
        frameUrl += '/' + userMsgToken;
    }
    frameUrl += '?vt=' + _spOptions.visitorToken + '&rf=' + encodeURIComponent(window.location.href);
    openUrlInDialog(frameUrl);
}

function openUrlInDialog(frameUrl){
    var overlayId = '-speakpipe-modal-overlay';
    var dlgId = '-speakpipe-dialog-container';
    var frameId = '_speakpipe_labs_recorder_frame';
    var indId = '-speakpipe-frame-load-indicator';

    var dlg = document.getElementById(dlgId);
    var frame = document.getElementById(frameId);
    var modalOverlay = document.getElementById(overlayId);
    var ind = document.getElementById(indId);
    if(dlg){
        frame.style.visibility = 'hidden';
        modalOverlay.style.display = 'block';
        ind.style.display = 'block';
        dlg.style.display = 'block';
        setDialogPosition(dlg);
        frame.src = frameUrl;
        return;
    }

    if(!modalOverlay){
        modalOverlay = document.createElement('div');
        modalOverlay.setAttribute('id', overlayId);
        var s = modalOverlay.style;
        s.display = 'none';
        s.position = 'fixed';
        s.top = '0';
        s.left = '0';
        s.right = '0';
        s.bottom = '0';
        s.zIndex = 2147482112;
        s.opacity = 0.5;
        s.backgroundColor = '#000000';
        s.filter = 'alpha(opacity=50)';
        document.body.appendChild(modalOverlay);
    }
    modalOverlay.style.display = 'block';

    if(!dlg){
        dlg = document.createElement('div');
        dlg.setAttribute('id', dlgId);
        var s = dlg.style;
        //s.position = 'fixed';
        //s.position = 'absolute';
        s.left = '600px';
        s.top = '100px';
        s.width = _spOptions.dialog.width + 'px';
        s.height = _spOptions.dialog.height + 'px';
        s.backgroundColor = '#fff';
        s.zIndex = 2147482113;
        s.fontFamily = 'Arial, Helvetica, sans-serif';
        s.padding = '8px';
        s.color = '#000';
        s.backgroundColor = '#F1F1F1';
        s.direction = 'ltr';
        var rds = '8px';
        s.WebkitBorderRadius = rds;
        s.MozBorderRadius = rds;
        s.borderRadius = rds;
        var shdw = '0px 0px 5px 2px rgba(0, 0, 0, 0.3)';
        s.MozBoxShadow = shdw;
        s.WebkitBoxShadow = shdw;
        s.boxShadow = shdw;
        s.visibility = 'hidden';
        s.WebkitBoxSizing = 'content-box';
        s.MozBoxSizing = 'content-box';
        s.boxSizing = 'content-box';

        document.body.appendChild(dlg);
        //var wndSize = getWindowSize();
        //s.left = Math.round((wndSize.width - dlg.offsetWidth) / 2) + 'px';
        //s.top = Math.round((wndSize.height - dlg.offsetHeight) / 2) + 'px';
        setDialogPosition(dlg);

        var cls = document.createElement('a');
        cls.setAttribute('href', '#');
        //cls.setAttribute('style', 'left: auto !important;');
        //setStyles(cls, { left: 'auto !important' });
        cls.style.cssText = 'left: auto !important';

        var s = cls.style;
        s.background = 'url("' + _spOptions.domain + '/static/img/widget/close-btn.png") no-repeat scroll 0 0 transparent';
        s.cursor = 'pointer';
        s.display = 'inline';
        s.width = '27px';
        s.height = '29px';
        s.position = 'absolute';
        s.right = '-16px';
        s.top = '-15px';
        s.zIndex = 2147482114;
        cls.onclick = function(){
            onCloseDialog();
            dlg.style.display = 'none';
            document.getElementById(overlayId).style.display = 'none';
	    //_logAction('close_dialog');
            return false;
        }
        dlg.appendChild(cls);

        if(!ind){
            //http://ajaxload.info/
            ind = document.createElement('img');
            ind.src = _spOptions.domain + '/static/img/widget/dialog-loader.gif';
            ind.setAttribute('id', indId);
            ind.style.position = 'absolute';
            var imgSize = 42;
            ind.style.left = (_spOptions.dialog.width - imgSize) / 2 + 'px';
            ind.style.top = (_spOptions.dialog.height - imgSize) / 2 + 'px';
            ind.style.margin = '0';
            ind.style.cssFloat = 'none';
            dlg.appendChild(ind);
        }
        dlg.style.visibility = 'visible';
    }


    if(!frame){
        frame = document.createElement('iframe');
        frame.style.cssText = 'border: none !important; padding: 0 !important; margin: 0 !important; box-shadow: none !important;';
        frame.style.width = _spOptions.dialog.width + 'px';
        frame.style.height = _spOptions.dialog.height + 'px';
        frame.setAttribute('id', frameId);
        frame.setAttribute('frameBorder', 0);
        frame.style.visibility = 'hidden';
        frame.setAttribute('src', frameUrl);

        function _showFrame(){
            ind.style.display = 'none';
            frame.style.visibility = 'visible';
        }

        if (frame.attachEvent){
            frame.attachEvent("onload", _showFrame);
        } else {
            frame.onload = _showFrame;
        }

        dlg.appendChild(frame);
    }
}


function loadScript(src, type, onLoadHandler){
    var scriptTag;
    if(type === 'js'){
        scriptTag = document.createElement('script');
        scriptTag.setAttribute("type","text/javascript");
        scriptTag.setAttribute("src", _spOptions.domain + src);
        if(onLoadHandler){
            scriptTag.onload = onLoadHandler;
            scriptTag.onreadystatechange = function () { // Same thing but for IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    onLoadHandler();
                }
            };
        }
    }
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(scriptTag);
}

function _logAction(actionCode, forceLog, logMessage){
    if(_spOptions.isLogEnabled || forceLog){
        var _logUrl = '/widget_log?';
        var params = {
            "speakpipe_id": _spOptions.siteId,
            "visitor_token": _spOptions.visitorToken,
            "action_code": actionCode,
	    "log_message": logMessage,
            "ref_url": window.location.href };
        var paramStr = 'wloader=1';
        for(var key in params){
            if(params[key]){
                paramStr += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
            }
        }
        _logUrl = _logUrl + paramStr;
        loadScript(_logUrl, 'js');
    }
}


function setCookie(name, value){
    if(name){
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 7);
        document.cookie = name + '=' + value + '; expires=' + expireDate.toGMTString() + '; path=/';
        //http://www.quirksmode.org/js/cookies.html
        //http://www.sitepoint.com/forums/showthread.php?189223-Make-a-cookie-expire-after-a-week
    }
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function replaceNewLines(text){
    var lines = text.split('\n');
    var result = '';
    for(var i = 0; i < lines.length; i++){
        result += lines[i];
        if(i < lines.length - 1){
            result += '<br>';
        }
    }
    return result;
}

function previewBalloon(text, color){
    if(text){
        _spOptions.balloon.text = replaceNewLines(text);
    }
    if(color){
        _spOptions.balloon.color = '#' + color;
    }
    showBalloon(_sidebarButton, _spOptions, speakPipeClick, true);
}


function isMobileClient(){
    //http://www.hand-interactive.com/resources/detect-mobile-javascript.htm
    var _iPhone = "iphone";
    var _iPod = "ipod";
    var _iPad = "ipad";
    var _android = "android";

    //Initialize our user agent string to lower case.
    var uagent = navigator.userAgent.toLowerCase();

    function _detect(deviceName){
        if (uagent.search(deviceName) > -1)
           return true;
        else
           return false;
    }

    return _detect(_iPhone) || _detect(_iPod) || _detect(_iPad) || _detect(_android);
}

function isiOSDevice(){
    //http://www.hand-interactive.com/resources/detect-mobile-javascript.htm
    var _iPhone = "iphone";
    var _iPod = "ipod";
    var _iPad = "ipad";

    //Initialize our user agent string to lower case.
    var uagent = navigator.userAgent.toLowerCase();

    function _detect(deviceName){
        if (uagent.search(deviceName) > -1)
           return true;
        else
           return false;
    }

    return _detect(_iPhone) || _detect(_iPod) || _detect(_iPad);
}


function showBalloon(tab, widgetOptions, callback, forceShow){
    var _balloonTimeout;
    var balloonId = '-speakpipe-tab-balloon';
    var _balloonCookieName = '_speakpipe_balloon_flag';
    var _balloonCookieValue = 2;
    var _balloonMicImg;
    var _isInitialized = false;

    function initBalloon(){
        hideBalloon();
        if(!_isInitialized){
            //preload mic image for balloon
            _balloonMicImg = new Image();
            //_balloonMicImg.setAttribute('style', 'display: inline; font: 16px/120% Arial, Helvetica, sans-serif; border: none; padding: 0; margin: 0; background: none; background-color: transparent; margin: 0 0 -15px;');
            setStyles(_balloonMicImg, { display: 'inline', font: '16px/120% Arial, Helvetica, sans-serif', border: 'none',
                      padding: 0, margin: 0, background: 'none', backgroundColor: 'transparent', margin: '0 0 -15px', cssFloat: 'none' });
            _balloonMicImg.src = _spOptions.domain + "/static/img/widget/mic-icon.png";
            _isInitialized = true;
        }
    }

    function hideBalloon(){
        if(_balloonTimeout){
            clearTimeout(_balloonTimeout);
        }
        else{
            var balloon = document.getElementById(balloonId);
            if(balloon){
                balloon.style.display = 'none';
                balloon.parentNode.removeChild(balloon);
            }
        }
        return false;
    }

    function canShowBalloon(){
        var f = readCookie(_balloonCookieName);
        return ((f != _balloonCookieValue) && !isMobileClient()) || (_spOptions.siteId === 80597);
    }

    function getBalloonStyles(options, borderWidth, borderColor){
        var res = {
            'font': '15px/120% Arial, Helvetica, sans-serif',
            'position': 'fixed',
            'visibility': 'hidden',
            'right': '10px',
            'top': '30%',
            'backgroundColor': options.balloon.color,
            'color': '#000',
            'width': '270px',
            'padding': '15px',
            'border': borderWidth + 'px solid ' + borderColor,
            'webkitBorderRadius': '5px',
            'MozBorderRadius': '5px',
            'borderRadius': '5px',
            'boxShadow': '0px 1px 2px 0px rgba(0, 0, 0, 0.3)',
            'MozBoxShadow': '0px 1px 2px 0px rgba(0, 0, 0, 0.3)',
            'webkitBoxShadow': '0px 1px 2px 0px rgba(0, 0, 0, 0.3)',
            'zIndex': '1000200',
            'direction': 'ltr',
            'textAlign': 'left',
            'textShadow': 'none',
            'webkitBoxSizing': 'content-box',
            'MozBoxSizing': 'content-box',
            'boxSizing': 'content-box'
        }
        return res;
    }


    function setBalloonLocation(balloon, tab, tabPosition, arrowMargin){
        var delta = 15;
        var bWidth = balloon.offsetWidth;
        var bHeight = balloon.offsetHeight;
        var tWidth = tab.offsetWidth;
        var tHeight = tab.offsetHeight;
        var tPos = findPos(tab);
        var bPos = { 'left': 0, 'top': 0 };
        var actualMargin = arrowMargin + 10;

        bPos.top = tHeight + delta;
        if(tabPosition in {'bottom-right':1, 'bottom-left':1}){
            bPos.top = tPos.top - bHeight - delta;
        }

        switch(tabPosition){
            case 'top-left':
            case 'bottom-left':
                bPos.left = tPos.left + (tWidth / 2) - actualMargin;
                break;
            case 'top-right':
            case 'bottom-right':
                bPos.left = tPos.left - bWidth + (tWidth / 2) + actualMargin;
                break;
            case 'middle-left':
            case 'middle-right':
                bPos.top = tPos.top + tHeight / 2 - actualMargin;
        }

        if(tabPosition === 'middle-left'){
            bPos.left = tPos.left + tWidth + delta;
        }
        else if(tabPosition === 'middle-right'){
            bPos.left = tPos.left - bWidth - delta;
        }

        balloon.style.left = bPos.left + 'px';
        balloon.style.top = bPos.top + 'px';
    }


    function setBalloonArrowStyle(arrow, arrowBorder, tabPosition, color, borderColor, borderWidth, arrowMargin){
        var arrowBorderWidth = 10;
        var res = {
            'borderColor': 'rgba(255,255,255,0)',
            'borderStyle': 'solid',
            'borderWidth': arrowBorderWidth + 'px',
            'height': '0',
            'width': '0',
            'position': 'absolute',
            'zIndex': '1000100'
        };

        //fix for IE since it doesn't support RGBA
        //http://stackoverflow.com/questions/6225284/css-transparent-border-problem-in-firefox-4/6225443#6225443
        res['borderColor'] = 'transparent';

        var arrowStyle;
        var arrowBorderStyle;

        var locationBase = arrowBorderWidth * 2;
        var arrowOffset = - (locationBase - borderWidth) + 'px';
        var arrowBorderOffset = - (locationBase + borderWidth) + 'px';

        var vLocation = tabPosition.substring(0, tabPosition.indexOf('-'));
        var hLocation = tabPosition.substring(tabPosition.indexOf('-') + 1);

        if(tabPosition in {'top-right':1, 'top-left':1, 'bottom-right':1, 'bottom-left':1}){
            var whatBorder = (vLocation === 'top') ? 'borderBottomColor' : 'borderTopColor';
            res[whatBorder] = color;
            res[vLocation] = arrowOffset;
            res[hLocation] = arrowMargin + 'px';
            //arrowStyle = getStyleStr(res);
            setStyles(arrow, res);

            res[whatBorder] = borderColor;
            res[vLocation] = arrowBorderOffset;
            //arrowBorderStyle = getStyleStr(res);
            setStyles(arrowBorder, res);
        }
        else if(tabPosition in {'middle-right':1, 'middle-left':1 }){
            var whatBorder = (hLocation === 'left') ? 'borderRightColor' : 'borderLeftColor';
            res[whatBorder] = color;
            res[hLocation] = arrowOffset;
            res['top'] = arrowMargin + 'px';
            //arrowStyle = getStyleStr(res);
            setStyles(arrow, res);

            res[whatBorder] = borderColor;
            res[hLocation] = arrowBorderOffset;
            //arrowBorderStyle = getStyleStr(res);
            setStyles(arrowBorder, res);
        }

        //fix for IE since it doesn't support RGBA
        //http://stackoverflow.com/questions/6225284/css-transparent-border-problem-in-firefox-4/6225443#6225443
        //arrow.setAttribute('style', 'border-color: transparent; ' + arrowStyle);
        //arrowBorder.setAttribute('style', 'border-color: transparent; ' + arrowBorderStyle);
        return res;
    }


    function _balloon(){
        _balloonTimeout = null;

        var balloonBorderColor = shadeColor(widgetOptions.balloon.color, -30);  //'#f5d13e';
        var borderWidth = 2;
        var style = getBalloonStyles(widgetOptions, borderWidth, balloonBorderColor);
        //style = getStyleStr(style);

        var balloon = document.createElement('div');

        var closeBalloon = document.createElement('a');
        closeBalloon.onclick = function(e){
            if (!e) var e = window.event;
            e.cancelBubble = true;
            if (e.stopPropagation) e.stopPropagation();
            setCookie(_balloonCookieName, _balloonCookieValue);
            hideBalloon();
            //_logAction('balloon_close');
            return false;
        }
        closeBalloon.innerHTML = 'x';
        closeBalloon.setAttribute('href', '#');
        //closeBalloon.setAttribute('style', 'background-color: ' + balloonBorderColor + '; color: #e00; text-decoration: none; display: block; padding: 1px 5px; position: absolute; right: 10px; top: 8px; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;');
        setStyles(closeBalloon, {
            backgroundColor: balloonBorderColor, color: '#e00', textDecoration: 'none',
            display: 'block', padding: '1px 5px', position: 'absolute', right: '10px',
            top: '8px', WebkitBorderRadius: '3px', MozBorderRadius: '3px', borderRadius: '3px' });
        balloon.appendChild(closeBalloon);

        var balloonContent = document.createElement('div');

        var imgContent = document.createElement('div');
        //imgContent.setAttribute('style', 'text-align: left; margin: -5px 0 22px; padding: 0 0 0 5px;');
        setStyles(imgContent,
                  { textAlign: 'left', margin: '-5px 0 22px', padding: '0 0 0 5px'})
        imgContent.appendChild(_balloonMicImg);
        imgContent.innerHTML += '<b>Send a voice message</b>';
        balloonContent.appendChild(imgContent);

        balloonContent.innerHTML += widgetOptions.balloon.text;
        balloon.appendChild(balloonContent);

        //balloon.setAttribute('style', style);
        setStyles(balloon, style);
        balloon.setAttribute('id', balloonId);

        var tabPosition = widgetOptions.tab.position;

        var arrow = document.createElement('div');
        var arrowBorder = document.createElement('div');
        balloon.appendChild(arrowBorder);
        balloon.appendChild(arrow);
        var arrowMargin = 30;
        setBalloonArrowStyle(arrow, arrowBorder, tabPosition, widgetOptions.balloon.color, balloonBorderColor, borderWidth, arrowMargin);
        setCookie(_balloonCookieName, _balloonCookieValue);

        balloon.onclick = function(){
            if(callback){
                hideBalloon();
                callback();
                _logAction('balloon_click');
            }
        };

        document.body.appendChild(balloon);
        setBalloonLocation(balloon, tab, tabPosition, arrowMargin);
        balloon.style.visibility = 'visible';
    }

    if(forceShow || (canShowBalloon() && widgetOptions.balloon.enabled)){
	initBalloon();
        if(forceShow){
            _balloon();
        }
        else{
            _balloonTimeout = setTimeout(_balloon, 20000);
        }
    }

    return hideBalloon;
}


//end main function

})();
