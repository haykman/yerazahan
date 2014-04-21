$(document).ready(function() {

	initTopMenuButons();

	initLeftBoxesLinks();

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

function selectActiveTab() {

	if(window.location.hash == '' || window.location.hash == "#Երազահան")
	{
		activateTab($('#index'));
	}
	else if(window.location.hash == "#Նախաբաններ")
	{
		activateTab($('#dreams-by'));
	}
	else if(window.location.hash == "#Մեր մասին")
	{
		activateTab($('#about'));
	}
	else if(window.location.hash == "#Կոնտակտներ")
	{
		activateTab($('#contacts'));
	}
}

function clearActivityOfTabs() {
	$('.header-menu').each(function() {
		$(this).removeClass('header-menu-active');
		$(this).parent().removeClass('header-menu-inner-wrapper-active');
		$(this).parent().parent().removeClass('header-menu-wrapper-active');		
	});
}

function activateTab(tab) {
	$(tab).addClass('header-menu-active');
	$(tab).parent().addClass('header-menu-inner-wrapper-active');
	$(tab).parent().parent().addClass('header-menu-wrapper-active');
}

function loadPage() {
	var page = getTemplateFromHash();

	if(page != undefined) {
		$.ajax({
		    url: page,
		    context: document.body
		}).done(function(responce) {
		    $('#pageBody').html(responce);
		});
	}
}

function getTemplateFromHash() {
	switch(window.location.hash) {
		case '#about':
			return 'about';
			break;
	}
}

function initLeftBoxesLinks() {
	$('.left-box').each(function() {
	    if($(this).hasClass('star') {
		    $(this).children(":first-child").click(function() {
				window.location.hash = $(this).html();
		    	loadPage();
			});	
	    }
	});	
}