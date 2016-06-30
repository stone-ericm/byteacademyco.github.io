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
	console.log('next');
	return true;
}
o.h.prevSlide = function() {
	console.log('prev');
	return true;
}
o.h.firstSlide = function() {
	console.log('first');
	return true;
}
o.h.lastSlide = function() {
	console.log('last');
	return true;
}
// NOTES TO SELF REMEMBER ADD / REMOVE

// UTILITIES
o.u.buildSlides = function() {
	console.log('build');
	o.slides = document.getElementsByTagName('slide');
	console.log(o.slides);
	return true;
}
