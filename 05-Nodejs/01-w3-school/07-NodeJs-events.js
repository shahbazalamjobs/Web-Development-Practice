// Use of events module in NodeJs

// Import the EventEmitter class from the 'events' module
import EventEmitter from 'events';

// Create an EventEmitter instance 
const myEmitter = new EventEmitter();

// Attach a listener to the custom event OR listening events OR Assign the event handler to an event:
myEmitter.on('myEvent', (arg1, arg2) => {
    console.log('Event occurred:', arg1, arg2);
});

// Emit the custom event OR emitting events OR Fire the 'scream' event:
myEmitter.emit('myEvent', 'Hello', 'World');
 
 // Here EventEmitter is the name of the class from events module myEmitter is its instance


