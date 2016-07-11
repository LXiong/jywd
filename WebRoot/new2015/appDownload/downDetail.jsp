<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  
<!DOCTYPE>
<html manifest="${pageContext.request.contextPath}/new2015/manifest/index.appcache">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta names="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <title>下载详情</title>
    <link href="${pageContext.request.contextPath}/new2015/css/reset.css" rel="stylesheet" type="text/css" />
    <link href="${pageContext.request.contextPath}/new2015/css/common.css" rel="stylesheet" type="text/css" />
    <link href="${pageContext.request.contextPath}/new2015/css/appDownload.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="main">
    <ul class="appDown">
        <li>
            <a href="#">
                <div class="appImg"><img src="${pageContext.request.contextPath}/new2015/images/icons/d02.png" /></div>
                <div class="downDetail">
                    <h4>和生活</h4>
                    <p>1.08KB/S<span>8.07/12.72MB</span></p>
                    <div class="downDetProcess"></div>
                </div>
                <div class="downBtn">
                    <span class="downBtnOn bg-cover"></span>
                    <span class="downBtnDel bg-cover"></span>
                </div>
            </a>
        </li>
        <li>
            <a href="#">
                <div class="appImg"><img src="${pageContext.request.contextPath}/new2015/images/icons/ad01.png" /></div>
                <div class="downDetail">
                    <h4>和地图</h4>
                    <p>已暂停<span>8.07/12.72MB</span></p>
                    <div class="downDetProcess"></div>
                </div>
                <div class="downBtn">
                    <span class="downBtnStop bg-cover"></span>
                    <span class="downBtnDel bg-cover"></span>
                </div>
            </a>
        </li>
        <li>
            <a href="#">
                <div class="appImg"><img src="${pageContext.request.contextPath}/new2015/images/icons/d04.png" /></div>
                <div class="downDetail">
                    <h4>和包</h4>
                    <p>应用 2015-04-12</p>
                </div>
                <div class="downBtn">
                    <span class="downBtnOpen">打开</span>
                </div>
            </a>
        </li>
        <li>
            <a href="#">
                <div class="appImg"><img src="${pageContext.request.contextPath}/new2015/images/icons/ad02.png" /></div>
                <div class="downDetail">
                    <h4>灵犀</h4>
                    <p>应用 2015-04-12</p>
                </div>
                <div class="downBtn">
                    <span class="downBtnOpen">打开</span>
                </div>
            </a>
        </li>
        <li>
            <a href="#">
                <div class="appImg"><img src="${pageContext.request.contextPath}/new2015/images/icons/d03.png" /></div>
                <div class="downDetail">
                    <h4>和通讯录</h4>
                    <p>应用 2015-04-12</p>
                </div>
                <div class="downBtn">
                    <span class="downBtnOpen">打开</span>
                </div>
            </a>
        </li>
    </ul>
</div>

</body>
<script src="${pageContext.request.contextPath}/new2015/js/lib/seajs/seajs.js"></script>
<script type="text/javascript">
    seajs.use(['jquery','JSBridge','main'], function(a) {
        seajs.use("${pageContext.request.contextPath}/new2015/js/"+SCRIPT_PATH+"/model/down/downDetail");
    });
</script>

</html>
