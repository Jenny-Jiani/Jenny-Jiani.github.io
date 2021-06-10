$(function(){
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

	$("#xsNav .menuName").click(function () {
		$(this).parent().toggleClass('on');
		$(this).parent().find('.menuDetail').slideToggle(300);
	});
	
    /*smMenu*/
	$("#smMenu .smMenuToggle").click(function() {
		$("#mdMenu li").removeClass('on');
		$("#subMenu").slideToggle(300);
		$("#mdMenu li.products").toggleClass('on');
	});
		
	/*mdMenu*/
	$("#mdMenu .mdMenuToggle").click(function(){
		if ($(this).parent().hasClass('on')) {
			$("#mdMenu li").removeClass('on');
			$('body').removeClass('overviewHidden');
			$("#menuMask").hide();
		} else {
			$("#menuMask").show();
			$("#mdMenu li").removeClass('on');
			$(this).parent().addClass('on');
		}
		if ($(this).hasClass('dbrMenu')) {
			$("#subMenu").slideUp();
			$('#docSubMenu').slideUp();
			$('#companySubMenu').slideUp();
			$('#dbrSubMenu').slideToggle(300);
		}
		if ($(this).hasClass('docMenu')) {
			$("#subMenu").slideUp();
			$('#dbrSubMenu').slideUp();
			$('#companySubMenu').slideUp();
			$('#docSubMenu').slideToggle(300);
		}
		if ($(this).hasClass('companyMenu')) {
			$("#subMenu").slideUp();
			$('#dbrSubMenu').slideUp();
			$('#docSubMenu').slideUp();
			$('#companySubMenu').slideToggle(300);
		}
		if ($(this).hasClass('proMenu')) {
			$('#dbrSubMenu').slideUp();
			$('#docSubMenu').slideUp();
			$('#companySubMenu').slideUp();
			$("#subMenu").slideToggle(300);
		}
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

	// DBR Nav JS
	$('.showMenuMore').on('click', function () {
		if ($(this).hasClass('on')) {
				$('.showMenuMore').removeClass('on');
				$('.ct-more').slideUp();
		} else {
				$('.showMenuMore').removeClass('on');
				$(this).addClass('on');
				$('.ct-more').slideUp();
				$(this).parent().find('.ct-more').slideDown();
		}
	});
	
	/*smSearch*/
	$("#smSearch .smSearchToggle").click(function(){
		$(this).hide();
		$("#smSearch .smSearchSubmit").show();
		$("#smSearch input[type='text']").show().focus();
		$("#subNav .ct-list > li").removeClass('on');
		$("#subNav .ct-list > li ul.ct-more").hide();
	});	

	$('.mobileProductMenu .productLogo').on('click', function () {
		$('.mobileProductDetailMenu').slideToggle(300);
	})
	
	$(document).click(function(){
		/*header*/
		$("#xsNav").slideUp('fast');
		$("#xsHeader .xsMenuToggle .open").show();
		$("#xsHeader .xsMenuToggle .close").hide();

		$("#subMenu").slideUp('fast');
		$("#menuMask").hide();
		$('.headSubMenu').slideUp(300);
		$("#mdMenu li").removeClass('on');

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
		
		$('.mobileProductDetailMenu').slideUp();
		$('.ct-more').slideUp().removeClass('on');
		$('.showMenuMore').removeClass('on');
	});

	$("#xsHeader .xsMenuToggle, #xsNav, #smHeader .smMenuToggle, #smSearch, #mdMenu .mdMenuToggle, #subMenu, #subNav .subNav-xsToggle, #subNav .ct-list, .header-signin, .showMenuMore, .mobileProductMenu .productLogo, mobileProductDetailMenu").bind('click', function (e) {
		stopPropagation(e);
	});
});

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

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
			return unescape(r[2]);
	} else {
			return null;
	}
}
