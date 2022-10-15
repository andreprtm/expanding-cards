'use strict';

const panels = document.querySelectorAll('.panel');

function removeActiveClasses() {
	panels.forEach(function (panel) {
		panel.classList.remove('active');
	});
}

panels.forEach(function (panel) {
	panel.addEventListener('click', function () {
		removeActiveClasses();
		panel.classList.add('active');
	});
});
