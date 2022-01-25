function UrlReplace()
{
    var docUrl = document.URL;
    // 获得链接中拼接的版本号
    var ver = getUrlVars(docUrl)["ver"];
    // matchVer: true -- 表示链接已经匹配到正确的版本号。
    var matchVer = getUrlVars(docUrl)["matchVer"];
    var crv = getUrlVars(docUrl)["crv"];
    var iscrv = getUrlVars(docUrl)["iscrv"];
    // 如果链接没有匹配到正确的版本号，并且这是一个带版本号的链接，那么就要去跳转到正确的版本链接。
    if (matchVer == undefined && ver != undefined) {
        if (crv != undefined) {
            RedirToGivenVersionPage(ver, crv);
        } else {
            RedirToGivenVersionPage(ver);
        }
    }
}

// 链接重定向到正确的版本号页面
function RedirToGivenVersionPage(inputVer, crv)
{
    var curVerTag = $(".currentVersion");
    var bestVerIndex = -1;
    var verDiff = -1;
    var curVer = null;
    var bestVersion = null;
    if (curVerTag != null) {
        var verText = (curVerTag[0].innerHTML).toLowerCase();
        if (verText == "latest version"){
            curVer = "latest"
        }
        else{
            curVer = verText.replace('version ','');
        }
        if (curVer == inputVer){
            console.log('0:' + curVer)
            return;
        }
        else {
            bestVerIndex = -1;
            verDiff = GetVersionDiff(inputVer, curVer);
            bestVersion = curVer;
        }
    }
    var anchorVal = "";
    var curDocUrl = document.URL;
    // 如果链接中有锚点，将锚点部分分离，保存在 anchorVal 中
    if (curDocUrl.indexOf("#") != -1){
		var urlAry = curDocUrl.split("#");
		if (urlAry.length == 2){
            anchorVal = "#" + urlAry[1];
		}
	}

    var changeVer = "";
    // cVer: ture，需要去更改版本 
    var ifChangeVersion = getUrlVars(document.URL)["cVer"];
    if (ifChangeVersion != undefined) {
        changeVer = "&&cVer=true";
    }

    var historyList = $(".otherVersions");
    if (historyList != null)
    {
        var listAry = historyList[0].getElementsByTagName("li");

        for (var i = 0; i < listAry.length; i++) {
            var tmpVerText = listAry[i].innerText;
            var tmpVer = null;
            if (tmpVerText == "latest version"){
                tmpVer = "latest"
            } else {
                tmpVer = tmpVerText.replace('version ','');
            }
            if (!crv) {
                if (tmpVer == inputVer) {
                    var aTag = $(listAry[i]).children("a");
                    if (aTag.length > 0) {
                        var exp = new RegExp(/[?]+([^=]+)=/gi)
                        if (exp.exec(aTag[0].href) != null){
                            window.location.replace(aTag[0].href + "&&ver=" +inputVer+"&&matchVer=true" + changeVer + anchorVal);
                            return;
                        }
                        else{
                            if (getUrlVars(document.URL)["src"] != undefined){
                                window.location.replace(aTag[0].href + "?src=" + getUrlVars(document.URL)["src"] + "&&ver=" +inputVer+"&&matchVer=true" + changeVer + anchorVal);
                            }
                            else{
                                window.location.replace(aTag[0].href + "?ver=" +inputVer+"&&matchVer=true" + changeVer + anchorVal);
                            }
                           return;
                        }
                    }
                } else {
                    var tmpDiff = GetVersionDiff(inputVer, tmpVer);
                    if (tmpDiff >= 0 && (tmpDiff < verDiff || verDiff < 0)){
                        bestVerIndex = i;
                        verDiff = tmpDiff;
                        bestVersion = tmpVer;
                    }
                }
            } else {
                if (tmpVer == crv) {
                    var aTag = $(listAry[i]).children("a");
                    if (aTag.length > 0) {
                        var exp = new RegExp(/[?]+([^=]+)=/gi)
                        if (exp.exec(aTag[0].href) != null){
                            window.location.replace(aTag[0].href + "&&ver=" +inputVer+"&&matchVer=true&&crv=" + crv + changeVer + anchorVal);
                            return;
                        }
                        else{
                            if (getUrlVars(document.URL)["src"] != undefined){
                                window.location.replace(aTag[0].href + "?src=" + getUrlVars(document.URL)["src"] + "&&ver=" +inputVer+"&&matchVer=true&&crv=" + crv + changeVer + anchorVal);
                            }
                            else{
                                window.location.replace(aTag[0].href + "?ver=" +inputVer+"&&matchVer=true&&crv=" + crv + changeVer + anchorVal);
                            }
                           return;
                        }
                    }
                } else {
                    var tmpDiff = GetVersionDiff(crv, tmpVer);
                    if (tmpDiff >= 0 && (tmpDiff < verDiff || verDiff < 0)){
                        bestVerIndex = i;
                        verDiff = tmpDiff;
                        bestVersion = tmpVer;
                    }
                }
            }
        }
    }
 
    
    if (bestVerIndex >= 0){
        var aTag = $(listAry[bestVerIndex]).children("a");
        if (aTag.length > 0) {
            var exp = new RegExp(/[?]+([^=]+)=/gi)
            if (exp.exec(aTag[0].href) != null){
                window.location.replace(aTag[0].href + "&&ver=" +inputVer+"&&matchVer=true"+ changeVer + anchorVal + (crv?"&&crv="+crv:""));
                return;
            } else {
                if (getUrlVars(document.URL)["src"] != undefined){
                    window.location.replace(aTag[0].href + "?src="+ getUrlVars(document.URL)["src"] + "&&ver=" +inputVer+"&&matchVer=true"+ changeVer + anchorVal + (crv?"&&crv="+crv:""));
                } else {
                    window.location.replace(aTag[0].href + "?ver=" +inputVer+"&&matchVer=true"+ changeVer + anchorVal + (crv?"&&crv="+crv:""));
                }
                return;
            }
        }
    }

    return;
}

function GetVersionDiff(inputVer, compareVer)
{
    if (compareVer == "latest"){
        return 100;
    }

    if (compareVer < inputVer){
        return -1;
    }

    var inputChar = inputVer.split('.');
    var compareChar = compareVer.split('.');
    var diff = 0;

    var maxLength = Math.max(inputChar.length, compareChar.length);

    var curWeight = 1;
    for (var i = 0; i < maxLength; i++){
        var tmpInput = i < inputChar.length ? inputChar[i] : 0;
        if (isNaN(tmpInput)){
            diff = diff + curWeight;
            break;
        }
        var tmpCompare = i < compareChar.length ? compareChar[i] : 0;
        if (isNaN(tmpCompare)){
            diff = diff + curWeight;
            break;
        }
        var tmpDiff = tmpCompare - tmpInput;
        if (tmpDiff >= 0){
            curWeight = curWeight / 10;
            diff = diff + curWeight * tmpDiff;
        }
        else{
            diff = diff - curWeight;
            curWeight = curWeight / 10;
            diff = diff + curWeight * (tmpDiff + 10);
        }
    }
    
    return diff;
}

function addParam (aTag, verText)
{
    var hrefVal = aTag.href;

    if(hrefVal == "")
        return;

    var exp = new RegExp(/[?&]ver=[^&^#]+/gi);
    // 链接中已有版本号--直接打开
	if (exp.exec(hrefVal) != null) {
        if (aTag.target == '_blank') {
            window.open(hrefVal)
        } else {
            window.location.href = hrefVal;
        }
		return;
	}
	// 链接中不含版本号信息，进行拼接
	var verStr = "";
	exp = new RegExp(/[?]+([^=]+)=/gi);
    // 链接中是否有参数
    if (exp.exec(hrefVal) != null) {
		verStr = "&&ver=" + verText;
	}
	else {
		verStr = "?ver=" + verText;
	}
	// 拼接时判断链接中是否有锚点
	if (hrefVal.indexOf("#") != -1) {
		var urlAry = hrefVal.split("#");
		if (urlAry.length == 2){
            if (aTag.target == '_blank') {
                window.open(urlAry[0]+verStr+"#"+urlAry[1])
            } else {
                window.location.href = urlAry[0]+verStr+"#"+urlAry[1];
            }
			return;
		}
	}
	else{
        if (aTag.target == '_blank') {
		    window.open(hrefVal+verStr);
        } else {
            window.location.href = hrefVal+verStr;
        }
		return;
	}
	
	return;
}

function changeVersion (liTag)
{
	var innertext = (liTag.innerText).toLowerCase();
	var ver = null;
	if (innertext == "latest version"){
		ver = "latest"
	}
	else{
		ver = innertext.replace('version ','');
	}
	var curUrl = document.URL;
	var srcVal = getUrlVars(curUrl)["src"];
    var crv = getUrlVars(curUrl)["crv"];
    var iscrv = getUrlVars(curUrl)["iscrv"];
	var anchorVar = undefined;
	if (curUrl.indexOf("#") != -1){
		anchorVar = (curUrl.split("#")).pop();
	}

	if (curUrl.indexOf("?") != -1){
		curUrl = curUrl.substring(0, curUrl.indexOf("?"));
	}
	if (curUrl.indexOf("#") != -1){
		curUrl = curUrl.substring(0, curUrl.indexOf("#"));
	}

    // 如果是crv页面，在本页面切换版本树时，需要去找一下对应版本树的crv版本号
    
    if (crv!=undefined || iscrv=='true') {
        crv = getCrvPageVersion(ver, curUrl)
    }
	
	curUrl = curUrl + "?ver=" + ver + "&&cVer=true" + (crv!=undefined ? "&&iscrv=true&&crv=" + crv:"");
	if (srcVal != undefined){
		curUrl = curUrl + "&&src=" + srcVal;
	}
	if(anchorVar != undefined){
		curUrl = curUrl + "#" + anchorVar;
	}
	window.location.href = curUrl;
	return;
}

function getCrvPageVersion(ver, curUrl) {
    //version_tree_list:参数定义在index-banner.js
    if (version_tree_list && version_tree_list.length > 0) {
        for(var i = 0; i<version_tree_list.length; i++) {
            if ($(version_tree_list[i]).attr('id') == 'version_tree_' + ver) {
                var objs = $(version_tree_list[i]).find("li a")
                for (var oi = 0; oi < objs.length; oi++) {
                    var objLink = objs[oi].href
                    if (objLink.indexOf("?") != -1){
                        objLink = objLink.substring(0, objLink.indexOf("?"));
                    }
                    if (objLink.indexOf("#") != -1){
                        objLink = objLink.substring(0, objLink.indexOf("#"));
                    }
                    if (objLink == curUrl) {
                        crv = getUrlVars(objs[oi].href)["crv"]
                        return crv
                    }
                }
            }
        }
    }
    return undefined
}
