let {messagesToShare} = require('./messageList');

function helloWorld(someMessageToSay){
	console.log(someMessageToSay);
}


helloWorld("hello there!");

for (const message of messagesToShare) {
	helloWorld(message);
}