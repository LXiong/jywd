<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE>
<html manifest="${pageContext.request.contextPath}/new2015/manifest/index.appcache">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <title>金币明细</title>
    <link href="${pageContext.request.contextPath}/new2015/css/reset.css" rel="stylesheet" type="text/css" />
    <link href="${pageContext.request.contextPath}/new2015/css/common.css" rel="stylesheet" type="text/css" />
    <link href="${pageContext.request.contextPath}/new2015/css/person.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="main">
    <ul class="myBDeta">
        <!-- <li>
            <p><span>办理号码:</span>13455669988</p>
            <p>20元以下流量套餐</p>
            <p class="myBDetaTime"><span>办理时间：</span>2015-08-02 11:29:41</p>
            <p class="myBMoney"><span>金币:</span> +2</p>
        </li>
        <li>
            <p><span>办理号码:</span>13455669988</p>
            <p>20元以下流量套餐</p>
            <p class="myBDetaTime"><span>办理时间：</span>2015-08-02 11:29:41</p>
            <p class="myBMoney"><span>金币:</span> +2</p>
        </li>
        <li>
            <p><span>办理号码:</span>13455669988</p>
            <p>20元以下流量套餐</p>
            <p class="myBDetaTime"><span>办理时间：</span>2015-08-02 11:29:41</p>
            <p class="myBMoney"><span>金币:</span> +2</p>
        </li> -->
    </ul>
</div>

</body>
<script src="${pageContext.request.contextPath}/new2015/js/lib/echarts/echarts-all.js"></script>
<script src="${pageContext.request.contextPath}/new2015/js/lib/seajs/seajs.js"></script>
<script type="text/javascript">
    seajs.use(['jquery','JSBridge','main','tmpl'], function(a) {
        seajs.use("${pageContext.request.contextPath}/new2015/js/"+SCRIPT_PATH+"/model/person/myGoldDetail");
    });
</script>

</html>
