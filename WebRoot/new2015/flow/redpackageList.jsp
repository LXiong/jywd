<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE>
<html manifest="${pageContext.request.contextPath}/new2015/manifest/flow/redpackageList.appcache">
<head> 
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<title>流量红包</title>
    <link href="${pageContext.request.contextPath}/new2015/css/reset.css" rel="stylesheet" type="text/css" />
    <link href="${pageContext.request.contextPath}/new2015/css/common.css" rel="stylesheet" type="text/css" />
    <link href="${pageContext.request.contextPath}/new2015/css/flow.css" rel="stylesheet" type="text/css" />
</head>
<body class="redpbg">
<div class="main">
    <div class="redpHead"> 
        <img src="${pageContext.request.contextPath}/new2015/images/flow/redpbg.jpg" />
        <a href="javascript:;"  class="redpBtn bg-cover" onClick="buyRedpackage()">购买并发送流量红包</a>
    </div>
    <ul class="redpNav">
        <li id="redpNavLi1" class="on" onclick="javascript:selectredpNav('a');">我发起的红包</li>
        <li id="redpNavLi2"   onclick="javascript:selectredpNav('b');">我领到的红包</li>
        <li id="redpNavLi3" onclick="javascript:selectredpNav('c');">活动规则</li>
    </ul>
    <div id="showTable" class="redpMain">
        <div id="showTable1" class="redpShow">
            <table cellspacing="0" cellpadding="0" border="0" width="100%" id="redp1" class="is-load-occ">
            	<tbody>
            	</tbody>
            </table>
            <!--我发起的红包模板 start
            <script id="tempredpList1" type="text/x-jquery-tmpl">
                <tr>
                    <td width="30%">${flow}</td>
                    <td width="20%">${handle}</td>
                    <td width="50%">有效期:${time}</td>
                </tr>
                </script>
            我发起的红包模板 end-->

        </div>
        <div id="showTable2" class="redpShow hide">
            <table cellspacing="0" cellpadding="0" border="0" width="100%" id="redp2" class="is-load-occ">
            	<tbody>
            	</tbody>
            </table>
            <!--我领到的红包模板 start-->
            <script id="tempredpList2" type="text/x-jquery-tmpl">
            </script>
            <!--我领到的红包模板 end-->
        </div>
        <div id="showTable3" class="redpShow hide">
            <div class="redpRule">
                <div class="redpTitle">流量红包派发规则</div>
                <p>1、客户可以多次购买流量红包，每次购买的流量红包派发邀请或购买者直接兑换的有效期均为7天，逾期未被领取或未成功兑换的红包流量将在24小时内自动兑换到您绑定的号码。</p>
                <p>2、流量红包兑换成功后所含流量立即生效，有效期至下一月结日，为省内通用流量，可用于2G/3G/4G网络。</p>
                <p>3、客户成功购买红包后，系统将生成唯一的领取页面链接，可将该链接分享给微信好友或朋友圈，分享次数不限，好友抢红包先抢先得，抢完即止。同时购买者也可将红包流量直接兑换给好友。</p>
                <p>4、流量红包活动仅限揭阳移动客户参加，其中4G随心王客户、未实名登记/未更换4G USIM客户及转品牌未生效客户无法参加。</p>
            </div>
        </div>
    </div>
    <div class="h1em"></div>
</div>

</body>
<script src="${pageContext.request.contextPath}/new2015/js/lib/seajs/seajs.js"></script>
<script type="text/javascript">
    seajs.use(['jquery','JSBridge','main','tmpl'], function(a) {
        seajs.use("${pageContext.request.contextPath}/new2015/js/"+SCRIPT_PATH+"/model/flow/redpackageList");
    });
</script>

</html>