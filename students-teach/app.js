var students = [
	'Kody', 'Andrew', 'Nate', 'Brad',
	'Courtney', 'Freddie', 'Dom', 'Dan'
];
var topics = [
	'jsonp', '$(document).ready', 'event.preventDefault',
	'list comprehensions', 'tuples', 'generators',
	'selectors', 'text-align', 'font-family', 'background-color'
];

document.addEventListener('DOMContentLoaded', function() {
	var student = students[
		Math.floor(Math.random()*students.length)
	];
	var topic = topics[
		Math.floor(Math.random()*topics.length)
	];

	document.getElementById('student').innerText = student;
	document.getElementById('topic').innerText = topic;
});
