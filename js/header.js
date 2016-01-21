(function(document) {

	var currentActiveNavElement = document.getElementsByClassName('global-header-nav-item isActive');

	if (currentActiveNavElement.length > 0) {
		currentActiveNavElement[0].classList.remove('isActive');
	}

	//navElement[0].addEventListener('click', addActiveClassToNavItems);

	//function addActiveClassToNavItems() {
		//console.log(this);
	//}
})(document);