window.addEventListener('DOMContentLoaded', function(){
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTab(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	hideTab(1);

	function showTab(b) {
		if (tabContent[b].classList.contains('hide')){
			hideTab(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event){
		if (event.target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (event.target == tab[i]) {
					console.log(event.target);
					showTab(i);
					break;
				}
			}
		};
	})

})