/*JavaScript Document*/
$(function(){
	/* devic-type */
	if(browserRedirect() == 'pc'){
		$(".visible-mobile").hide();
		$(".hidden-mobile").show();		
	}else{
		/*Compatible with the bottom of the live chat button*/
		$('body').addClass('mobile');
		/* Compatible -- click document to hide headerNav */
		$("body").css('cursor','pointer');
		/* disabled Btn */
		$(".btn-disabled-mobile").addClass('disabled');
		$(".visible-mobile").show();
		$(".hidden-mobile").hide();	
	}
})

$(function(){
	/*header search*/
	function headerSearch(){
		var searchVal = '';
		if(breakpoint()=='xs'){
			searchVal = $("#xsSearch input[type='text']").val();
		}else{
			searchVal = $("#smSearch input[type='text']").val();
		}
		$('#txtSearch').val(searchVal);
	    $("#btnSearch").click();
	}
	$(".headerSearch .headerSearchSubmit").click(function(){
		headerSearch();
	});
	$(".headerSearch input[type='text']").bind('keypress',function(event){  
        if(event.keyCode == "13")      
        {
            headerSearch();
        }
    });
	
	/*xsMenu*/
	$("#xsMenu .xsMenuToggle").click(function() {
		$("#xsNav").slideToggle();
		$("#xsHeader .xsMenuToggle .open").toggle();
		$("#xsHeader .xsMenuToggle .close").toggle();
		setTimeout(function(){
			$("#xsNav .products").show(); 
			$("#xsNav .xsNavToggle .fa").removeClass("fa-caret-down").addClass("fa-caret-up");
		},200)
	});
	$("#xsNav .xsNavToggle").click(function(){
		$("#xsNav .xsNavToggle .fa").toggleClass('fa-caret-up');
		$("#xsNav .xsNavToggle .fa").toggleClass('fa-caret-down');
		$("#xsNav .products").slideToggle();
	});
	
    /*smMenu*/
	$("#smMenu .smMenuToggle").click(function() {
		 $("#subMenu").slideToggle(300);
		 //From sm to md&lg
		 $("#mdMenu li.products").toggleClass('on');
		 $("#mdMenu li.products i").toggleClass('fa-caret-up');
		 $("#mdMenu li.products i").toggleClass('fa-caret-down');
	});
		
	/*mdMenu*/
	$("#mdMenu .mdMenuToggle").click(function(){
		$("#subMenu").slideToggle(300);
		$("#mdMenu li.products").toggleClass('on');
		$("#mdMenu li.products i").toggleClass('fa-caret-up');
		$("#mdMenu li.products i").toggleClass('fa-caret-down');
	});
	
	/*subNav*/
	$("#subNav .subNav-xsToggle").click(function(){
		$(this).toggleClass('on');
		$("#subNav .ct-list").slideToggle();
		$("#subNav .subNav-xsToggle .fa").toggleClass('fa-caret-right').toggleClass('fa-caret-down');
		$("#subNav .ct-list > li").removeClass('on');
		$("#subNav .ct-list > li ul.ct-more").slideUp();
		$("#subNav .ct-list > li .subNav-toggle i.show-xs").addClass('fa-angle-down').removeClass('fa-angle-up');
	});
	$("#subNav .subNav-toggle").click(function(){		
		$(this).parent('li').siblings('li').removeClass('on');
		$(this).parent('li').siblings('li').find("ul.ct-more").hide();
		$(this).parent('li').siblings('li').find(".subNav-toggle i.show-xs").addClass('fa-angle-down').removeClass('fa-angle-up');
		
		$(this).parent('li').toggleClass('on');
		$(this).siblings('ul.ct-more').slideToggle();
		$(this).find('i.show-xs').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
		/*Center the ct-more*/
		if(breakpoint()!='xs'){
			var toggleWidth = $(this).parent('li').outerWidth();
			var ulWidth = $(this).siblings('ul.ct-more').outerWidth();
			$(this).siblings('ul.ct-more').css('left',(toggleWidth-ulWidth)/2);
		}
	});

	/*$("#subNav").clickhide({
		_rootObjID: "#subNav",
		_toggleNode: ".dropdown-toggle",
		_operateNode: ".subNav-ct-more",
		_currentTabClass: "on",
	});
	$("#subNav .dropdown-toggle").click(function(){
	    var toggleWidth = $(this).parent().outerWidth();
		var ulWidth = $(this).siblings('ul').outerWidth();
		$(this).siblings('ul').css('left',(toggleWidth-ulWidth)/2);
	});*/
	
	/*smSearch*/
	$("#smSearch .smSearchToggle").click(function(){
	    $(this).hide();
		$("#smSearch .smSearchSubmit").show();
		$("#smSearch input[type='text']").show().focus();
		$("#subNav .ct-list > li").removeClass('on');
		$("#subNav .ct-list > li ul.ct-more").hide();
	});	
	
	$(document).click(function(){
		/*header*/
		$("#xsNav").slideUp('fast');
		$("#xsHeader .xsMenuToggle .open").show();
		$("#xsHeader .xsMenuToggle .close").hide();
		setTimeout(function(){
			$("#xsNav .products").show(); 
			$("#xsNav .xsNavToggle .fa").removeClass("fa-caret-down").addClass("fa-caret-up");
		},200);
		$("#subMenu").slideUp('fast');
		$("#mdMenu li.products").removeClass('on');
		$("#mdMenu li.products i").removeClass('fa-caret-up').addClass('fa-caret-down');
		/*subNav*/
		if(breakpoint()=='xs'){
			$("#subNav .ct-list").slideUp();
		}
		$("#subNav .subNav-xsToggle").removeClass('on');
		$("#subNav .subNav-xsToggle .fa").addClass('fa-caret-right').removeClass('fa-caret-down');
		$("#subNav .ct-list > li").removeClass('on');
		$("#subNav .ct-list > li ul.ct-more").slideUp();
		$("#subNav .ct-list > li .subNav-toggle i.show-xs").addClass('fa-angle-down').removeClass('fa-angle-up');
		/*smSearch*/
		$("#smSearch .smSearchSubmit").hide();
		$("#smSearch input[type='text']").hide();
		$("#smSearch .smSearchToggle").show();		
	});
	$("#xsHeader .xsMenuToggle, #xsNav, #smHeader .smMenuToggle, #smSearch, #mdMenu .mdMenuToggle, #subMenu, #subNav .subNav-xsToggle, #subNav .ct-list").bind('click',function(e){
		stopPropagation(e);
	});	
	
	//Image lazy loading
	$(".lazy").lazyload({
		effect:"fadeIn",
		threshold : 100,
		placeholder:"https://www.dynamsoft.com/assets/images/img-Placeholder-1x1.png"
		});
	setTimeout(function(){
    	$(".lazy-bg").lazyload({
			effect:"fadeIn",
			placeholder:"https://www.dynamsoft.com/assets/images/img-Placeholder-1x1.png"
			//threshold : 500
		});
	},1000);
	
	//cookieAlert
	var cookieWarnText = '<div class="container pr"><p>We use cookies to study how our website is being used. You consent to our cookies if you continue to use this website.</p><span class="close-cookieAlert"><i class="fa fa-times close" aria-hidden="true"></i></span></div>';
	var cookieWarn = $("<div id='cookieAlert'></div>").html(cookieWarnText);
	$.ajax({
		type: "GET",
		url: "https://www.dynamsoft.com/CustomerPortal/CookieHints.ashx",
		//dataType: "json",
		success: function (returnData) {			
            var visits = $.getCookie("cookie-alert")||$.getCookie("DSCookieCompliancyAccepted");
			if((returnData.toLowerCase() == "true"?true:false)){
				if(!visits){
					cookieWarn.insertBefore($("#wrapper"));
					$("#cookieAlert .close-cookieAlert").click(function(){
						$("#cookieAlert").hide();
					});
					$("#cookieAlert").fadeIn();
                    $.setCookie("DSCookieCompliancyAccepted", 1, 7, "/", "dynamsoft.com");
				}else{
					$("#cookieAlert").fadeOut();
				}
			}else{
				$("#cookieAlert").fadeOut();
			}
		},
		error: function(err){
			$("#cookieAlert").fadeOut();
		}
	});
	
	/*toTop && sunNav-scroll-fixed*/
    $("#toTop").hide();
	$(window).scroll(function(){
	   var windowScTop = $(window).scrollTop();
	   var subNavOffsetTop = $("#cookieAlert").is(":visible")?120:60;
	   if (windowScTop>subNavOffsetTop){
			var subNavPs=$("#subNav").css('position');
			var subNavDis=$("#subNav").css('display');
			if(subNavPs=='relative'&&subNavDis=='block'){
			    $("#subNav").addClass('subNav-fixed');
			    $("#header").addClass('fixed');
				$("#subNav .subNav-rt .d-btn").addClass('bgOrange');
			}
			$("#toTop").fadeIn();
			$(".form-email-only").hide();
		}else{
			$("#header").removeClass('fixed');
			$("#subNav").removeClass('subNav-fixed');
			$("#subNav .subNav-rt .d-btn").removeClass('bgOrange');
			$("#toTop").fadeOut();
			$(".form-email-only").show();
		}
	});
	$("#toTop").click(function(){
		$('html,body').animate({scrollTop:0},500);
		return false;		
    });	
	
});

$(function () {
    $("[data-toggle='tooltip']").tooltip();
});

$(function() {
// popup div
	//select all the a tag with name equal to modal
    $('a[name=modal]').click(function(e) {
		var id = $(this).attr('href');
		popup(id, e);
		$('#mask').show();	
	});
	//if close button is clicked
    $('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		$('#mask').hide();
		$('.window').hide();
	});		
	//if mask is clicked
    $('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});	
	
	$(window).resize(function () {	 
 		resizeWindow();
	});		
});

/*popup div*/
function popup(id, e) {
	/*Cancel the link behavior*/
    if ( e && e.preventDefault ){
		e.preventDefault();
	} else {
		window.event.returnValue = false;
	}
	/*Get the screen height and width*/
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
	/*Set heigth and width to mask to fill up the whole screen*/
    $("#mask").css({
        "width": maskWidth,
        "height": maskHeight
    });
	/*Get the window height and width*/
    var winH = $(window).height();
    var winW = $(window).width();
	/*Set the popup window to center*/
    $(id).css("top", winH / 2 - $(id).height() / 2);
    $(id).css("left", winW / 2 - $(id).width() / 2);
	/*transition effect*/
    $(id).fadeIn(500);
}
function resizeWindow() {
    var box = $(".window");
	/*Get the window height and width*/
    var winH = $(window).height();
    var winW = $(window).width();
	/*Set the popup window to center*/
    box.css("top", winH/2 - box.height()/2);
    box.css("left", winW /2 - box.width()/2);
}

/*event bubble*/
function stopPropagation(e) {
	if (e.stopPropagation)
		e.stopPropagation();
	else
		e.cancelBubble = true;
}

/*device - Type*/
function browserRedirect() {
	var deviceType;
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile"; 
	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		deviceType = 'phone'; 
	} else {
		deviceType = 'pc'; 
	}  
	return deviceType;
}
//responsive type
function breakpoint(){
	var type;
	if($("#xsHeader").css('display')=='block'){
		type='xs';
		}else if($("#smHeader").css('display')=='block'){
			type='sm';
			}else if($("#mdHeader").css('display')=='block'){
				if($("#mdHeader .container").outerWidth()=='970'){
					type='md';
					}else{
						type='lg';
						}
				}
	return type;
}

/*Dialog Message*/
function MsgDialog(){
	$('#msgDialog').fadeToggle('fast');
	}

/*scroll To Main Content*/
function scrollToMainContent(){
	var targetOffsetTop = $(".scrollToMainContent").offset().top;
	$('html,body').animate({scrollTop:targetOffsetTop + 10},300);
	}

(function ($) {
	/*drop down menu*/
	$.fn.clickhide = function (options) {
		/*default configuration properities*/
		var defaults = {
			_clickOrHover: "click",/*click&&mouseenter*/
			_slideOrShow: "slide",
			_switchSpeed: " ",
			_documentClick: "true",
			_rootObjID: "#rootObjID",
			_toggleNode: ".toggleNode",
			_operateNode: ".operateNode",
			_currentTabClass: "currentTabClass",
			handler: null
		};
		var options = $.extend(defaults, options);
		var operateNode = $(options._rootObjID).find(options._operateNode);
		$(options._rootObjID).find(options._toggleNode).each(function(index, element) {   
		   $(this).bind(options._clickOrHover, function (e) {   
			  $(options._toggleNode).not(this).removeClass(options._currentTabClass);
			  $(this).toggleClass(options._currentTabClass);
			  operateNode.eq(index).toggleClass('on');/*filter options._operateNode*/
			  if(options._slideOrShow == 'slide'){
				 operateNode.not('.on').slideUp(options._switchSpeed);
				 operateNode.eq(index).slideToggle(options._switchSpeed); 
			  }else if(options._slideOrShow == 'show'){
				 operateNode.not('.on').hide(options._switchSpeed);
				 operateNode.eq(index).toggle(options._switchSpeed);
			   }
			   operateNode.eq(index).removeClass('on');
		  });
		});
		$(document).click(function(){
			if(options._documentClick == 'true'){
				$(options._toggleNode).removeClass(options._currentTabClass);
				if(options._slideOrShow == 'slide'){
				   operateNode.slideUp();
				  }else if(options._slideOrShow == 'show'){
				   operateNode.hide();
				  }
			}
		});
		$(options._toggleNode).bind(options._clickOrHover,function(e){
			stopPropagation(e);
		});
		
	};
	
	//Cookie addition, deletion, and change
	$.extend({
		getCookie:function(cookieName){
			var targetCookieStr = cookieName + "=";
			var targetCookieStrLength = targetCookieStr.length;
			var cookieLength = document.cookie.length;
			var i = 0;
			while (i < cookieLength) {
			var j = i + targetCookieStrLength;
			if (document.cookie.substring(i, j) == targetCookieStr){
				var endstr = (document.cookie.indexOf(";", j) == -1)?document.cookie.length:document.cookie.indexOf(";", j);
				return unescape(document.cookie.substring(j, endstr));
			}
			i = document.cookie.indexOf(" ", i) + 1;
			if (i == 0) break;
			}
			return null;
		},
		setCookie:function(name,value,expiredays,path,domain,secure){
			/*
			name: cookie's name
			value: cookie's content
			expiredays: cookie's expiredays
			path: cookie's default path
			domain: The domain cookie allowed
			secure: cookie's security field
			*/
			var exdate=new Date();
			exdate.setDate(exdate.getDate() + expiredays);
			document.cookie = name + "=" + escape (value) +
			((expiredays) ? "; expires=" + exdate.toGMTString() : "") +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			((secure) ? "; secure" : "");
		},
		deleteCookie:function(cookieName){
			var exdate=new Date();
			exdate.setDate(exdate.getDate() - 1);
			$.setCookie(cookieName, "", exdate);
		}
	});
})(jQuery);
