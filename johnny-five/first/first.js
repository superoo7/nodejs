// Johnny-Five
var five = require("johnny-five");
var board = new five.Board();

// firebase
var firebase = require("firebase");
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
	apiKey: "AIzaSyD1x9OEy4QbR159EhCygt9cLr8-maW-m1g",
	authDomain: "arduinojohnnyfive.firebaseapp.com",
	databaseURL: "https://arduinojohnnyfive.firebaseio.com",
	storageBucket: "arduinojohnnyfive.appspot.com",
};

var defaultApp = firebase.initializeApp(config);
console.log(defaultApp.name);

board.on("ready", function() {
  var led = new five.Led(13);

	  // This will grant access to the led instance
	  // from within the REPL that's created when
	  // running this program.
	  this.repl.inject({
	    led: led
	  });

});
