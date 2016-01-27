(function(document) {

	var currentActiveNavElement = document.getElementsByClassName('global-header-nav-item isActive');
	var navItems = document.getElementsByClassName('global-header-nav-item');
	var pageHeading = document.getElementsByTagName('h2');
	var pageHeadingName = pageHeading[0].getAttribute('data-nav');

	if (currentActiveNavElement.length > 0) {
		currentActiveNavElement[0].classList.remove('isActive');
	}

	navItems = [].filter.call(navItems, function(item) {
		var headerNavText = item.getElementsByTagName('a')[0].textContent.toLowerCase();
		return headerNavText === pageHeadingName;
	});

	navItems[0].classList.add('isActive');

})(document);