define(function(a){function b(a){var b=document.createElement("canvas"),c=new Image;c.src=a.src,b.width=c.width,b.height=c.height;var d=b.getContext("2d");d.drawImage(c,0,0);var e=b.toDataURL("image/png");return e.replace(/^data:image\/(png|jpg);base64,/,"")}function c(){this.objectJson="",this.addObject=f,this.addJson=g,this.sendBridgeObject=h,this.getObjectJsonValue=j}function d(){return o.versions.android?!0:!1}function e(a,c){var d="";if("undefined"!=typeof c)if(k(c)){var f,g=c.length;for(f="{",i=0;i<g;i++)"{"!=f&&(f+=", "),f+=e("obj"+i,c[i]);f+="}",d='"'+a+'": { "value":'+f+', "type": "array"}'}else if(l(c)){var f;f=JSON.stringify(c),d='"'+a+'": { "value":'+f+', "type": "json"}'}else{var f,h;"object"==typeof c&&"IMG"==c.nodeName?(f=b(c),h="image"):(f=c,h=typeof c),d='"'+a+'": { "value":"'+f+'", "type": "'+h+'"}'}return d}function f(a,b){var c=e(a,b);""!=c&&(""!=this.objectJson&&(this.objectJson+=", "),this.objectJson+=c)}function g(a){""!=this.objectJson&&(this.objectJson+=", "),this.objectJson+=a}function h(){if(d()){var a="{"+this.objectJson+"}";window.jsb.startView(a)}else n[m]=this.objectJson,window.location.href="JSBridge://ReadNotificationWithId?"+m,m++}function j(){return"{"+this.objectJson+"}"}function k(a){if("object"==typeof a){var b=a.constructor.toString().match(/array/i);return null!=b}return!1}function l(a){var b="object"==typeof a&&"[object object]"==Object.prototype.toString.call(a).toLowerCase()&&!a.length;return b}var m=0,n=new Array,o={versions:function(){var a=navigator.userAgent;navigator.appVersion;return{trident:a.indexOf("Trident")>-1,presto:a.indexOf("Presto")>-1,webKit:a.indexOf("AppleWebKit")>-1,gecko:a.indexOf("Gecko")>-1&&-1==a.indexOf("KHTML"),mobile:!a.match(/AppleWebKit.*Mobile.*/)||!a.match(/AppleWebKit/),ios:!!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:a.indexOf("Android")>-1||a.indexOf("Linux")>-1,iPhone:a.indexOf("iPhone")>-1,iPad:a.indexOf("iPad")>-1,webApp:-1==a.indexOf("Safari")}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()};jQuery.fn.extend({BindBridge:function(a,b){$("a",this).each(function(){var d=$(this).attr("href");$(this).attr("data",d),$(this).attr("href","#"),$(this).bind("click",function(){var d=$(this).attr("data");if("undefined"==typeof a&&(a="true"),"https://"!=d.substring(0,7)){var e=window.location.href;e=e.substring(0,e.lastIndexOf("/")+1),d=e+d}("undefined"==typeof b||""==b)&&(b="false");var f={OpenURL:d,OpenTap:a,auth:b},g=new c;g.addObject("3GType","link"),g.addObject("3GData",f),g.sendBridgeObject()})})}}),jQuery.extend({SendBridgeMesg:function(a,b,d,e){"undefined"==typeof a&&(a=""),"undefined"==typeof b?b="":b.indexOf("()")>=0&&(d=b,b=""),("undefined"==typeof d||d.indexOf("()")<=0)&&(d="onMesgComplete()"),("undefined"==typeof e||""==e)&&(e="false"),d=d.substring(0,d.length-2);var f=new c,g={ToNumber:b,Content:a,onComplete:d,auth:e};f.addObject("3GType","mesg"),f.addObject("3GData",g),f.sendBridgeObject()},SendBridgeFX:function(a,b,d,e){"undefined"==typeof b&&(b=""),"undefined"==typeof a&&(a="text"),("undefined"==typeof d||d.indexOf("()")<=0)&&(d="onFXComplete()"),("undefined"==typeof e||""==e)&&(e="false"),d=d.substring(0,d.length-2);var f=new c,g={FXType:a,FXData:b,onComplete:d,auth:e};f.addObject("3GType","share"),f.addObject("3GData",g),f.sendBridgeObject()},SendBridgeTel:function(a,b){if("undefined"!=typeof a){var d=new c;("undefined"==typeof b||""==b)&&(b="false");var e={Tel:a,auth:b};d.addObject("3GType","telephone"),d.addObject("3GData",e),d.sendBridgeObject()}},SendBridgeEmail:function(a,b,d,e,f,g){"undefined"==typeof a&&(a=""),"undefined"==typeof b&&(b=""),"undefined"==typeof d&&(d=""),"undefined"==typeof e?e="":e.indexOf("()")>=0&&(f=e,e=""),("undefined"==typeof f||f.indexOf("()")<=0)&&(f="onEmailComplete()"),("undefined"==typeof g||""==g)&&(g="false"),f=f.substring(0,f.length-2);var h=new c,i={Title:a,Content:b,To:d,CC:e,onComplete:f,auth:g};h.addObject("3GType","email"),h.addObject("3GData",i),h.sendBridgeObject()},BridgeHref:function(a,b){if("https://"!=a.substring(0,7)){var d=window.location.href;d=d.substring(0,d.lastIndexOf("/")+1),a=d+a}("undefined"==typeof b||""==b)&&(b="false");var e={OpenURL:a,OpenTap:"true",auth:b},f=new c;f.addObject("3GType","link"),f.addObject("3GData",e),f.sendBridgeObject()},SendBridgeVideo:function(a,b,d){if("http"!=b.substring(0,4)){var e=window.location.href;e=e.substring(0,e.lastIndexOf("/")+1),b=e+b}("undefined"==typeof d||""==d)&&(d="false");var f={PlayURL:b,VideoName:a,auth:d},g=new c;g.addObject("3GType","video"),g.addObject("3GData",f),g.sendBridgeObject()},BridgeUserHref:function(a,b,d,e,f,g){if("http"!=b.substring(0,4)){var h=window.location.href;h=h.substring(0,h.lastIndexOf("/")+1),b=h+b}("undefined"==typeof e||""==e)&&(e="false"),("undefined"==typeof f||""==f)&&(f="false"),("undefined"==typeof g||""==g)&&(g="true");var i={OpenURL:b,OpenTap:"true",SendValue:"false",userid:" ",auth:e,logMsg:d,hideWebTopBar:f,enableRefresh:g},j=new c;j.addObject("3GType","link"),j.addObject("3GData",i),j.addObject("PageTemplate","TopMenuPage"),j.sendBridgeObject()},IosLoginIn:function(a){var b={action:"LoginIn",phone:a},d=new c;d.addObject("3GType","LoginIn"),d.addObject("3GData",b),d.addObject("PageTemplate","TopMenuPage"),d.sendBridgeObject()},IosLoginOut:function(){var a={action:"LoginOut"},b=new c;b.addObject("3GType","LoginOut"),b.addObject("3GData",a),b.addObject("PageTemplate","TopMenuPage"),b.sendBridgeObject()},IosMsgQQ:function(a){var b={action:"qqMsg",qq:a},d=new c;d.addObject("3GType","qqMsg"),d.addObject("3GData",b),d.addObject("PageTemplate","TopMenuPage"),d.sendBridgeObject()},BridgeTestUserHref:function(a,b,d){("undefined"==typeof d||""==d)&&(d="false");var e={OpenURL:b,OpenTap:"true",SendValue:"false",userid:a,auth:d},f=new c;f.addObject("3GType","link"),f.addObject("3GData",e),f.addObject("PageTemplate","TopMenuPage"),f.sendBridgeObject()},BridgeIndexMemberHref:function(a,b,d,e){("undefined"==typeof d||""==d)&&(d="false"),("undefined"==typeof e||""==e)&&(e=""),b=sys.getBaseUrl()+b;var f={OpenURL:b,OpenTap:"true",SendValue:"false",userid:a,auth:d,pageId:e},g=new c;g.addObject("3GType","link"),g.addObject("3GData",f),g.addObject("PageTemplate","TopMenuPage"),g.sendBridgeObject()},BridgeRedPacketHref:function(a,b,d,e){if("http"!=d.substring(0,4)){var f=window.location.href;f=f.substring(0,f.lastIndexOf("/")+1),d=f+d}("undefined"==typeof e||""==e)&&(e="false");var g={userid:a,couponCode:b},h={OpenURL:d,OpenTap:"true",SendValue:"true",ValueData:g,auth:e,isrefresh:"true"},i=new c;i.addObject("3GType","link"),i.addObject("3GData",h),i.addObject("PageTemplate","TopMenuPage"),i.sendBridgeObject()},BridgeMeiShiMemberHref:function(a,b,d,e){if("http"!=d.substring(0,4)){var f=sys.getBaseUrl();d=f+d}("undefined"==typeof e||""==e)&&(e="false");var g={userid:a,typeid:b},h={OpenURL:d,OpenTap:"true",SendValue:"true",ValueData:g,auth:e},i=new c;i.addObject("3GType","link"),i.addObject("3GData",h),i.addObject("PageTemplate","TopMenuPage"),i.sendBridgeObject()},BridgeNewDetailMemberHref:function(a,b,d){d=sys.getBaseUrl()+d,("undefined"==typeof auth||""==auth)&&(auth="false");var e={userid:a,couponCode:b},f={OpenURL:d,OpenTap:"true",SendValue:"true",ValueData:e,auth:auth,isrefresh:"true"},g=new c;g.addObject("3GType","link"),g.addObject("3GData",f),g.addObject("PageTemplate","TopMenuPage"),g.sendBridgeObject()},BridgeDetailMemberHref:function(a,b,d,e){if("http"!=d.substring(0,4)){var f=window.location.href;f=f.substring(0,f.lastIndexOf("/")+1),d=f+d}("undefined"==typeof e||""==e)&&(e="false");var g={userid:a,couponCode:b},h={OpenURL:d,OpenTap:"true",SendValue:"true",ValueData:g,auth:e},i=new c;i.addObject("3GType","link"),i.addObject("3GData",h),i.addObject("PageTemplate","TopMenuPage"),i.sendBridgeObject()},BridgeMobileHref:function(a,b,d,e){("undefined"==typeof d||""==d)&&(d="false"),("undefined"==typeof e||""==e)&&(e="local");var f={OpenURL:b,OpenTap:"true",SendValue:"false",userid:a,auth:d},g=new c;g.addObject("3GType",e),g.addObject("3GData",f),g.addObject("PageTemplate","SimplePage"),g.sendBridgeObject()},BridgeMobileHrefByUrlNoFresh:function(a,b,d,e){("undefined"==typeof d||""==d)&&(d="false"),("undefined"==typeof e||""==e)&&(e="local"),b=sys.getBaseUrl()+b;var f={OpenURL:b,OpenTap:"true",SendValue:"false",userid:a,auth:d,enableRefresh:"false"},g=new c;g.addObject("3GType",e),g.addObject("3GData",f),g.addObject("PageTemplate","SimplePage"),g.sendBridgeObject()},BridgeMobileHrefByUrl:function(a,b,d,e){("undefined"==typeof d||""==d)&&(d="false"),("undefined"==typeof e||""==e)&&(e="local"),b=sys.getBaseUrl()+b;var f={OpenURL:b,OpenTap:"true",SendValue:"false",userid:a,auth:d},g=new c;g.addObject("3GType",e),g.addObject("3GData",f),g.addObject("PageTemplate","SimplePage"),g.sendBridgeObject()},BridgeExtendMobileHref:function(a,b,d,e,f){("undefined"==typeof d||""==d)&&(d="false"),("undefined"==typeof e||""==e)&&(e="local"),("undefined"==typeof f||""==f)&&(f="false");var g={OpenURL:b,OpenTap:"true",SendValue:"false",userid:a,auth:d,isclear:f},h=new c;h.addObject("3GType",e),h.addObject("3GData",g),h.addObject("PageTemplate","TopMenuPage"),h.sendBridgeObject()},BridgeHtmlMobileHref:function(a,b,d,e){("undefined"==typeof b||""==e)&&(b=""),("undefined"==typeof e||""==e)&&(e="false");var f={OpenURL:a,share_content:d,auth:e},g=new c;g.addObject("3GType","LinkShare"),g.addObject("3GData",f),g.addObject("PageTemplate","LinkShare"),g.sendBridgeObject()},BridgeSummerHref:function(a,b,d,e){("undefined"==typeof d||""==d)&&(d="false"),("undefined"==typeof e||""==e)&&(e="local");var f={OpenURL:b,OpenTap:"true",SendValue:"false",userid:a,auth:d,isrefresh:"true"},g=new c;g.addObject("3GType",e),g.addObject("3GData",f),g.addObject("PageTemplate","SimplePage"),g.sendBridgeObject()},BridgeAppInfoHref:function(a,b,d,e,f,g,h,i,j,k,l,m){("undefined"==typeof i||""==i)&&(i="false"),("undefined"==typeof j||""==j)&&(j=""),("undefined"==typeof k||""==k)&&(k="0"),("undefined"==typeof l||""==l)&&(l="0"),("undefined"==typeof m||""==m)&&(m="false");var n=sys.getImsidn();if("undefined"==typeof n||""==n)return void sys.gotoMember(2,"系统还不知道你是谁呢，请到个人中心核查您的手机号码是否完善！","完善号码");var o={OpenURL:sys.getBaseUrl()+a,downurl:d,appname:e,OpenTap:"true",SendValue:"false",userid:sys.getUserid(),appId:b,isgzdx:sys.isgzdx(),auth:i,uploadType:g,fileName:h,flowtips:j,reflow:k,filesize:l,isrefresh:m},p=new c;p.addObject("3GType",f),p.addObject("3GData",o),p.addObject("Title","详情"),p.addObject("PageTemplate","TopMenuPage"),p.sendBridgeObject()},BridgeCommonHref:function(a,b,d){("undefined"==typeof d||""==d)&&(d="false");var e={OpenURL:sys.getBaseUrl()+a,OpenTap:"true",SendValue:"false",userid:sys.getUserid(),auth:d},f=new c;f.addObject("3GType","link"),f.addObject("3GData",e),f.addObject("Title",b),f.addObject("PageTemplate","TopMenuPage"),f.sendBridgeObject()},BridgeCommonHrefGift:function(a,b,d){("undefined"==typeof d||""==d)&&(d="false");var e={OpenURL:sys.getBaseUrl()+a,OpenTap:"true",SendValue:"false",userid:sys.getUserid(),auth:d,isrefresh:"true"},f=new c;f.addObject("3GType","link"),f.addObject("3GData",e),f.addObject("Title",b),f.addObject("PageTemplate","TopMenuPage"),f.sendBridgeObject()},BridgeStopFlush:function(a,b,d){("undefined"==typeof d||""==d)&&(d="false"),b=sys.getBaseUrl()+b;var e={OpenURL:b,OpenTap:"true",SendValue:"false",userid:a,auth:d,enableRefresh:"false"},f=new c;f.addObject("3GType","link"),f.addObject("3GData",e),f.addObject("PageTemplate","TopMenuPage"),f.sendBridgeObject()},BridgeStopHtmlFlush:function(a,b,d,e,f){("undefined"==typeof auth||""==auth)&&(auth="false");var g={OpenURL:b,OpenTap:"true",SendValue:"false",userid:a,auth:auth,enableRefresh:"false",onlineReader:!0,sourceUrl:d,ctitle:e,curl:f},h=new c;h.addObject("3GType","link"),h.addObject("3GData",g),h.addObject("PageTemplate","TopMenuPage"),h.sendBridgeObject()},BridgeStopVideoFlush:function(a,b,d){("undefined"==typeof auth||""==auth)&&(auth="false"),b=sys.getBaseUrl()+b;var e={OpenURL:b,OpenTap:"true",SendValue:"false",userid:a,auth:auth,enableRefresh:"false",onlineReader:!0,sourceUrl:d,ctitle:"",curl:""},f=new c;f.addObject("3GType","link"),f.addObject("3GData",e),f.addObject("PageTemplate","TopMenuPage"),f.sendBridgeObject()},BridgeShare:function(){var a=new c;a.addObject("3GType","share");var b={FXType:"SHARE",auth:"false"};a.addObject("3GData",b),a.sendBridgeObject()},BridgeShareTitle:function(a,b){var d=new c;d.addObject("3GType","share");var e={FXType:a,FriendPhone:b,auth:"false"};d.addObject("3GData",e),d.sendBridgeObject()},BridgeGoBack:function(){var a=new c;a.addObject("3GType","go_back"),a.sendBridgeObject()},BridgeGoToHome:function(){var a=new c;a.addObject("3GType","gotoHome"),a.sendBridgeObject()},BridgerREnd:function(){},BridgeCommonHrefTask:function(a,b,d){("undefined"==typeof d||""==d)&&(d="false");var e={OpenURL:a,OpenTap:"true",SendValue:"false",userid:sys.getUserid(),auth:d,isrefresh:"true"},f=new c;f.addObject("3GType","link"),f.addObject("3GData",e),f.addObject("Title",b),f.addObject("PageTemplate","TopMenuPage"),f.sendBridgeObject()},BridgeIOSLoginOut:function(){for(var a=["jsbstr","_icon_","_musicuser_","_userId_","_score_","_nickName_","_gprsuser_","_userRank_"],b=a.length,d=0;b>d;d++)sys.removeStorage(a[d]);var e={action:"LoginOut"},f=new c;f.addObject("3GType","LoginOut"),f.addObject("3GData",e),f.addObject("PageTemplate","TopMenuPage"),f.sendBridgeObject()},BridgeShowWebViewFooter:function(){var a={action:"ShowCollectionToolbar"},b=new c;b.addObject("3GType","ShowCollectionToolbar"),b.addObject("3GData",a),b.addObject("PageTemplate","TopMenuPage"),b.sendBridgeObject()},BridgeSearchFlow:function(a,b){("undefined"==typeof auth||""==auth)&&(auth="false");var d={ToNumber:a,Content:b,auth:auth},e=new c;e.addObject("3GType","mesg"),e.addObject("3GData",d),e.sendBridgeObject()},BridgeStoreHref:function(a){("undefined"==typeof a||""==a)&&(a="false");var b={userid:sys.getUserid()},d={OpenTap:"true",SendValue:"false",ValueData:b,auth:a},e=new c;e.addObject("3GType","link"),e.addObject("HasTable","0"),e.addObject("ListSeled","0"),e.addObject("Title","流量余额宝");var f={Data:[{name:"热门推荐",imageIcon:sys.getBaseUrl()+"/new2014/images/top.png",openurl:sys.getBaseUrl()+"/new2014/store/Hot.html"},{name:"游戏专区",imageIcon:sys.getBaseUrl()+"/new2014/images/game.png",openurl:sys.getBaseUrl()+"/new2014/store/Game.html"}]};e.addObject("ListData",f),e.addObject("3GData",d),e.addObject("PageTemplate","TopAndBottomMenuPage"),e.sendBridgeObject()},BridgeEarnHref:function(a,b){("undefined"==typeof a||""==a)&&(a="false"),("undefined"==typeof b||""==b)&&(b="");var d={userid:sys.getUserid()},e={OpenTap:"true",SendValue:"false",ValueData:d,auth:a,pageId:b},f=new c;f.addObject("3GType","link"),f.addObject("HasTable","0"),f.addObject("ListSeled","0"),f.addObject("Title","赚积分");var g={Data:[{name:"日常任务",imageIcon:sys.getBaseUrl()+"/new2014/images/guess.png",openurl:sys.getBaseUrl()+"/new2014/earn/guess.html"},{name:"安装应用",imageIcon:sys.getBaseUrl()+"/new2014/images/install.png",openurl:sys.getBaseUrl()+"/new2014/earn/App.html"}]};f.addObject("ListData",g),f.addObject("3GData",e),f.addObject("PageTemplate","TopAndBottomMenuPage"),f.sendBridgeObject()}})});