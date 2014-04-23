var pagesMap = {
	home : "Երազահան",
	dreamsby : "Նախաբաններ",
	about : "Մեր մասին",
	contacts : "Կոնտակտներ"
};

$(document).ready(function() {

	initTopMenuButons();

	initLeftBoxesLinks();

	$(window).on('hashchange', function(){ 
		loadPage();
	});
	loadPage();
});

function initTopMenuButons() {

	selectActiveTab();

	$('.header-menu').each(function() {

	    $(this).mouseover(function() {
			$(this).addClass('header-menu-tmp-active');
			$(this).parent().addClass('header-menu-inner-wrapper-tmp-active');
			$(this).parent().parent().addClass('header-menu-wrapper-tmp-active');
		});
	    $(this).mouseout(function() {
			$(this).removeClass('header-menu-tmp-active');
			$(this).parent().removeClass('header-menu-inner-wrapper-tmp-active');
			$(this).parent().parent().removeClass('header-menu-wrapper-tmp-active');
		});
	    $(this).click(function() {
			if(!$(this).hasClass('header-menu-active'))	{
				clearActivityOfTabs();
		    	window.location.hash = $(this).html();
		    	selectActiveTab();
		    }
		});
	});
}

function getPageFromHash() {
	if(window.location.hash == '') {
		return 'index';
	}
	for(var prop in pagesMap) {
        if(pagesMap.hasOwnProperty(prop)) {
             if("#" + pagesMap[prop] == window.location.hash) {
                 return prop;
             }
        }
    }
}

function selectActiveTab() {
	activateTab($('#' + getPageFromHash()));
}

function clearActivityOfTabs() {
	$('.header-menu').each(function() {
		$(this).removeClass('header-menu-active');
		$(this).parent().removeClass('header-menu-inner-wrapper-active');
		$(this).parent().parent().removeClass('header-menu-wrapper-active');
	});
}

function activateTab(tab) {
	if($(tab)) {
		$(tab).addClass('header-menu-active');
		$(tab).parent().addClass('header-menu-inner-wrapper-active');
		$(tab).parent().parent().addClass('header-menu-wrapper-active');
	}
}

function loadPage() {
	var page = getPageFromHash();

	if(page == undefined) {
		page = "404";
	}

	$.ajax({
	    url: page,
	    context: document.body
	}).done(function(responce) {
	    $('#pageBody').html(responce);
	});
}

function initLeftBoxesLinks() {
	$('.left-box').each(function() {
	    if($(this).hasClass('star')) {
		    $(this).children(":first-child").click(function() {
				window.location.hash = $(this).html();
		    	loadPage();
			});	
	    }
	});	
}