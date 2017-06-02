var events = require('events');
var util = require('util');

var Person = function(name){
	this.name = name;
};

util.inherits(Person, events.EventEmitter);

var James = new Person("James");
var Mary = new Person("Mary");
var Ryu = new Person("Ryu");

var people = [James, Mary, Ryu];

people.forEach(function(person){
	person.on('speak', function(message) {
		console.log(person.name + ' said: ' + message)
	});
});

James.emit('speak', 'Hey dude');
