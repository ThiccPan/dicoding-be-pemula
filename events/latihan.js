// TODO 1
const {EventEmitter} = require('events');

const birthdayEventListener = ({name, age}) => {
  console.log(`Happy ${age} birthday ${name}!`);
}
 
// TODO 2
const myEmitter = new EventEmitter();
 
// TODO 3
myEmitter.on('birthday',birthdayEventListener);
 
// TODO 4
myEmitter.emit('birthday',{
  name: 'marine',
  age: 17
});