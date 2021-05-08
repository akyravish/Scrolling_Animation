// jshint esversion:6

const boxes = document.querySelectorAll('.box');

const trigger = () => {
	const triggerBottom = window.innerHeight * 0.8;
	boxes.forEach((box) => {
		const boxtop = box.getBoundingClientRect().top;
		if (boxtop < triggerBottom) {
			box.classList.add('show');
		} else {
			box.classList.remove('show');
		}
	});
};

window.addEventListener('scroll', trigger);

trigger();
