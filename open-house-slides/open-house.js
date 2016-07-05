// global superobject
var openHouse = o = {};

// methods
o.listeners = o.l = {};
o.handlers = o.h = {};
o.utilities = o.u = {};

// properties
o.current = 0;
o.slides = [];

// READY
document.addEventListener('DOMContentLoaded', function() {
	o.u.buildSlides();
	document.addEventListener('keydown', o.l.onKeyDown);
})

// LISTENERS
o.l.onKeyDown = function(event) {
	var k = event.keyCode;
	if (k == 39 || k == 76 || k == 68) o.h.nextSlide();
	if (k == 37 || k == 72 || k == 65) o.h.prevSlide();
	if (k == 38 || k == 75 || k == 87) o.h.firstSlide();
	if (k == 40 || k == 74 || k == 83) o.h.lastSlide();
}

// HANDLERS
o.h.nextSlide = function() {
	if (o.current +1 === o.slides.length) return true;
	o.slides[o.current].classList.add('hidden');
	o.current++;
	o.slides[o.current].classList.remove('hidden');
	return true;
}
o.h.prevSlide = function() {
	if (o.current === 0) return true;
	o.slides[o.current].classList.add('hidden');
	o.current--;
	o.slides[o.current].classList.remove('hidden');
	return true;
}
o.h.firstSlide = function() {
	o.slides[o.current].classList.add('hidden');
	o.current = 0;
	o.slides[o.current].classList.remove('hidden');
	return true;
}
o.h.lastSlide = function() {
	o.slides[o.current].classList.add('hidden');
	o.current = o.slides.length - 1;
	o.slides[o.current].classList.remove('hidden');
	return true;
}

// UTILITIES
o.u.buildSlides = function() {
	console.log('build');
	o.slides = document.getElementsByTagName('slide');
	console.log(o.slides);
	return true;
}
