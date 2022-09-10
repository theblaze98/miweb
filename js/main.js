const grid = new Muuri('.grid', {
	layout: {
		rounding: false,
	},
});

grid.refreshItems().layout();

const sliderDarkMode = document.getElementById('slider_dark_mode');

sliderDarkMode.addEventListener('click', e => {
	sliderDarkMode.querySelector('.slider').classList.toggle('active');
	document.getElementById('body').classList.toggle('dark-active');
});
