$(document).ready(function(){ 
    
    $('.markdown-body .sample-code-prefix + blockquote > ul > li:first-child').addClass('on')
    $('.markdown-body .sample-code-prefix + blockquote > ol > li:first-child').addClass('on')
    
    init();

    window.addEventListener('scroll', scrollFunc);

    function init2() {
        var subHeight = 0;
        if ($('.subHeadWrapper').length > 0) {
            subHeight = $('.subHeadWrapper').height();
        } else {
            subHeight = $('.productMenu').height();
        }
        var menuHeight = $('#overall-header').height() + subHeight;
        $('#sideBarCnt').css({'width': $('.sideBar').width() + 'px'});
        $('.container .head').css({'width': $('.docContainer').width() + 'px'});
        $('#fullTreeMenuListContainer').css({'height': 'calc(100vh - '+(menuHeight + 120) +'px)'});
        $('.rightSideMenu').css({'height': 'calc(100vh - '+ (menuHeight)+'px)'});
        $('.docContainer .markdown-body').css({'margin-top': ($('#docHead').outerHeight() + 0) + 'px'});
        if ($(window).outerWidth() > 1680) {
            if (breakpoint() == 'lg') {
                $('.markdown-body h2').css({'padding-top': $('#docHead').outerHeight() + 110 + 'px'})
                $('.markdown-body h2').css({'margin-top': -$('#docHead').outerHeight() - 80 + 'px'})
                $('.markdown-body h3').css({'padding-top': $('#docHead').outerHeight() + 110 + 'px'})
                $('.markdown-body h3').css({'margin-top': -$('#docHead').outerHeight() - 110 + 'px'})
                $('.markdown-body h4').css({'padding-top': $('#docHead').outerHeight() + 110 + 'px'})
                $('.markdown-body h4').css({'margin-top': -$('#docHead').outerHeight() - 110 + 'px'})
                $('.markdown-body h5').css({'padding-top': $('#docHead').outerHeight() + 110 + 'px'})
                $('.markdown-body h5').css({'margin-top': -$('#docHead').outerHeight() - 110 + 'px'})
            }
        } else {
            if (breakpoint() == 'lg') {
                $('.markdown-body h2').css({'padding-top': $('#docHead').outerHeight() + 90 + 'px'})
                $('.markdown-body h2').css({'margin-top': -$('#docHead').outerHeight() - 60 + 'px'})
                $('.markdown-body h3').css({'padding-top': $('#docHead').outerHeight() + 90 + 'px'})
                $('.markdown-body h3').css({'margin-top': -$('#docHead').outerHeight() - 90 + 'px'})
                $('.markdown-body h4').css({'padding-top': $('#docHead').outerHeight() + 90 + 'px'})
                $('.markdown-body h4').css({'margin-top': -$('#docHead').outerHeight() - 90 + 'px'})
                $('.markdown-body h5').css({'padding-top': $('#docHead').outerHeight() + 90 + 'px'})
                $('.markdown-body h5').css({'margin-top': -$('#docHead').outerHeight() - 90 + 'px'})
            }
        }
        
    }

    function init() {
        $(window).scrollTop() > 0 && scrollFunc()
    }

    function realFunc() {
        if (breakpoint() == 'lg') {
            var subHeight = 0;
            if ($('.subHeadWrapper').length > 0) {
                subHeight = $('.subHeadWrapper').height();
            } else {
                subHeight = $('.productMenu').height();
            }
            var menuHeight = $('#overall-header').height() + subHeight;
            var sd = $(window).scrollTop();
            if (sd >= $('#overall-header').height()) {
                // head and sidebar fixed
                if ($('.subHeadWrapper').length > 0) {
                    $('.subHeadWrapper').css({'top': '0px'});
                    $('#docHead').css({'top': ($('.subHeadWrapper').height() + 1) + 'px'});
                } else if ($('.productMenu').length > 0) {
                    $('.productMenu').css({'top': '0px'});
                    $('#docHead').css({'top': ($('.productMenu').height()) + 'px'});
                } else {
                    $('#docHead').css({'top': '0px'});
                }
                $('.sideBar #sideBarCnt').addClass('sidebar-fixed');
                $('.rightSideMenu').addClass('rsm-fixed');
            } else {
                // head and sidebar fixed
                if ($('.subHeadWrapper').length > 0) {
                    $('.subHeadWrapper').css({'top': ($('#overall-header').height()-sd) + 'px'});
                    $('.sideBar').css({'padding-top': $('.subHeadWrapper').height() + 42 + 'px!important'});
                } else if ($('.productMenu').length > 0) {
                    $('.productMenu').css({'top': ($('#overall-header').height()-sd) + 'px'});
                    $('.sideBar').css({'padding-top': $('.productMenu').height() + 42 + 'px!important'});
                } else {
                    $('.sideBar').css({'padding-top':  + '42px!important'});
                }
                $('#docHead').css({'top': (menuHeight-sd)+1 + 'px'});
                $('.sideBar #sideBarCnt').removeClass('sidebar-fixed');
                $('.rightSideMenu').removeClass('rsm-fixed');
            }
        } else {
            $('.subHeadWrapper').css({'top': 'unset'});
            $('.productMenu').css({'top': 'unset'});
            $('#docHead').css({'top': 'unset'});
            $('.sideBar').css({'padding-top': '20px!important'});
        }
    }

    function scrollFunc() {
        var sd = $(window).scrollTop();
        var docMenuHeight = $('#overall-header').height()
        var subMenuHeight = $('.subHeadWrapper').length > 0 ? $('.subHeadWrapper').height() : ($('.productMenu').length > 0 ? $('.productMenu').height() : 0)
        if ($(window).outerWidth() >= 992) {
            if (sd < docMenuHeight) {
                var curLength = docMenuHeight + subMenuHeight - sd
                $('.sideBar').css({'top': curLength + 'px', 'height': 'calc(100vh - ' + curLength + 'px)'})
                $('.productMenu').length > 0 && $('.productMenu, .middleWrapper, .rightSideMenu .rightMenuContent').removeClass('fixedMenu')
                $('.subHeadWrapper').length > 0 && $('.subHeadWrapper, .middleWrapper, .rightSideMenu .rightMenuContent').removeClass('fixedMenu')
            } else {
                var curLength = docMenuHeight
                $('.sideBar').css({'top': curLength + 'px', 'height': 'calc(100vh - ' + curLength + 'px)'})
                $('.productMenu').length > 0 && $('.productMenu, .middleWrapper, .rightSideMenu .rightMenuContent').addClass('fixedMenu')
                $('.subHeadWrapper').length > 0 && $('.subHeadWrapper, .middleWrapper, .rightSideMenu .rightMenuContent').addClass('fixedMenu')
            }
        }

        // right menu active link
        var title = document.querySelectorAll('article h2, article h3');
        var rightNavItem = $('#AutoGenerateSidebar a');
        var flag = false
        for(i=0; i<title.length; i++){
            // console.log($(title[i]).offset().top - 100, sd)
            if($(title[i]).offset().top - 100 <= sd) {
                flag = true
                $('#AutoGenerateSidebar a').removeClass("active");
                $(rightNavItem[i]).addClass("active");
            }
        }
        if (!flag) {
            $('#AutoGenerateSidebar a').removeClass("active");
            $(rightNavItem[0]).addClass("active");
        }
    }

    $('.sideBarIcon').click(function() {
        $('.sideBar').addClass('show');
        $('#menuMask').addClass('showTableContent');
    });

    $('.showTableContent, .sideBar .showMobile i').click(function() {
        $('.sideBar').removeClass('show');
        $('#menuMask').removeClass('showTableContent');
    });

    $(document).click(function(){
        $('.otherVersions').hide();
        $('.fullVersionInfo').hide();
    })

    $('.changeBtn').on('click', function(e) {
        $('.otherVersions').toggle();
        stopPropagation(e);
    })

    $('.fvChange').on('click', function(e) {
        $('.fullVersionInfo').toggle();
        stopPropagation(e);
    })

    $('.history .currentVersion').on('click', function(e) {
        $('.fullVersionInfo').slideToggle();
        stopPropagation(e);
    })

    $('.markdown-body .sample-code-prefix + blockquote ul li').on('click', function() {
        var index = $(this).index()
        var sIndex = $($(this).parent().parent()[0].previousSibling.previousSibling).index('.sample-code-prefix')
        $('.markdown-body .sample-code-prefix').eq(sIndex).find('+ blockquote ul li').removeClass('on')
        $('.markdown-body .sample-code-prefix').eq(sIndex).find('+ blockquote ol li').removeClass('on')
        $('.markdown-body .sample-code-prefix').eq(sIndex).find('+ blockquote ul li').eq(index).addClass('on')
        $('.markdown-body .sample-code-prefix').eq(sIndex).find('+ blockquote ol li').eq(index).addClass('on')
    })

    $('.markdown-body .sample-code-prefix + blockquote ol li a').on('click', function() {
        copy($(this).parent().find('code').text())
    })

    $('.copy-prefix + p a').on('click', function() {
        copy($(this).parent().find('+ div code').text())
    })
})

function copy(data) {
    let url = data;
    let oInput = document.createElement('textarea')
    oInput.value = url
    document.body.appendChild(oInput)
    oInput.select()
    document.execCommand("Copy");
    oInput.remove()
}
