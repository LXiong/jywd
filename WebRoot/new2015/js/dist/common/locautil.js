define(function(a,b,c){function d(){var a={goUrl:function(b,c,d){var e="Request_"+(new Date).getTime();return("undefined"==typeof d||""==d)&&(d="true"),"undefined"!=typeof jsb||a.isIosApp()?void(1==c?a.isLogin()?$.BridgeUserHref(a.getUserid(),b,e,"","",d):$.BridgeUserHref("",a.getBaseUrl()+"new2015/index/login_2.html",e,"","",d):$.BridgeUserHref(a.getUserid(),b,e,"","",d)):void(window.location.href=b)},getUserid:function(){return a.getCookie("userid")},getPhone:function(){return null!=a.Js_getCookie("phone")?a.Js_getCookie("phone"):a.getCookie("phone")},getPhoneRsa:function(){return a.getCookie("phoneRsa")},getRanCode:function(){return a.getCookie("ranCode")},isLogin:function(){return""==a.getCookie("phone")||null==a.getCookie("phone")?!1:!0},Indexheader:function(b){var c="",d="";c='<span class="icon_login" onClick="sys.goUrl(\''+a.getBaseUrl()+"new2015/index/person.html',1)\" ></span>",d='<span class="icon_msg" onClick="sys.goUrl(\''+a.getBaseUrl()+"new2015/msg/index_1.html',1)\" ></span>",c='<a href="javascript:" class="icon_back" onclick="sys.goJavascriptBack()"><b></b></a>';var d='<div class="headerBar ads_row"><div class="ads_c_3 hleft">'+c+'</div><div class="ads_c_6"><div class="pagetitle">'+document.title+'</div></div><div class="ads_c_3 hright"></div></div><div class="headerBarHeight"></div>';$(".main").prepend(d)},isObjEmpty:function(a){return"undefined"==typeof a||""==a||"null"==a?!0:!1},getPhoneContacts:function(){return"undefined"==typeof jsb?"":jsb.getPhoneContacts()},getBaseUrl:function(){return"http://"+window.location.host+"/jywd/"},onlineService:function(b){return"undefined"!=typeof window.jsb?void window.jsb.onlineService(b):a.isIosApp()?void $.IosMsgQQ(b):void 0},getLoginUrl:function(){return a.getBaseUrl()+"new2015/index/login_1.html"},getUrlresources:function(){return a.getBaseUrl()+"new2015/"},logMsg:function(a,b){},strToObject:function(a){return JSON.parse(a)},objectToStr:function(a){return JSON.stringify(a)},getHttpParam:function(a){var b=window.location.href;return b.GetValue(a)},bodyRSA:function(a,b){setMaxDigits(130);var c=new RSAKeyPair(a,"",b);return c},setCookie:function(b,c){a.setStorage(b,c)},getCookie:function(b){return a.getStorage(b)},removeCookie:function(a){},setStorage:function(b,c){var d=window.localStorage;return d?void d.setItem(b,c):void a.logMsg("getStorage","window.localStorage is null")},removeStorage:function(b){var c=window.localStorage;return c?void c.removeItem(b):void a.logMsg("getStorage","window.localStorage is null")},getStorage:function(b){var c=window.localStorage;return c?c.getItem(b):void a.logMsg("getStorage","window.localStorage is null")},setAssignment:function(a,b){var c=$("#"+a)[0].tagName.toUpperCase();"IMG"==c?$("#"+a).attr("src",b):"SELECT"==c||"INPUT"==c?$("#"+a).val(b):$("#"+a).html(b)},setAssignmentAUrl:function(a,b){$("#"+a).attr("href",b)},setNone:function(a){$("#"+a).css("display","none")},setReadonly:function(a){$("#"+a).attr("readOnly",!0)},setReadonlyNode:function(a){$("#"+a).attr("readOnly",!1)},setDisplay:function(a){$("#"+a).css("display","")},openUrl:function(b){var c=(new Date).getTime(),d=a.openUrlArg(b,"_t",c);"undefined"!=typeof window.jsb,window.location.replace(d)},goBack:function(){"undefined"==typeof jsb?history.back(-1):$.BridgeGoBack()},isEmpty:function(a,b){var c=""!=$.trim($("#"+a).val());return c?!0:!1},strDecode:function(a){return decodeURIComponent(a)},strEncode:function(a){return encodeURIComponent(a)},cov:function(a){return a+""},getHttps:function(){return"https://"},getHttp:function(){return"http://"},is_weixn:function(){var a=navigator.userAgent.toLowerCase();return"micromessenger"==a.match(/MicroMessenger/i)?!0:!1},loginCallback:function(){if("undefined"!=typeof jsb)window.jsb.loginSuc();else if(a.isIosApp()){var b=a.getPhone();$.IosLoginIn(b)}else window.location.href="../index/index_login_after_1_new.html"},isIosApp:function(){return"true"==a.getCookie("iphoneApp")?!0:!1},goJavascriptBack:function(){history.go(-1)},showLoading:function(a){$("#common-load-layer")[0]||$("body").append('<div class="common-load-layer" id="common-load-layer" style="opacity:0"><div class="common-load-wrap"><div class="spinner"><div class="dot1"></div><div class="dot2"></div></div></div><div class="common-load-text" id="common-load-text">加载中...</div></div>'),$("#common-load-text").html(a),$("#common-load-layer").css("opacity",1)},hideLoading:function(){var a=$("#common-load-layer");a.css("opacity",0)},consloeAjax:function(a){try{console.log(JSON.stringify(a))}catch(b){console.log(a)}}};window.sys=a}b.init=d});