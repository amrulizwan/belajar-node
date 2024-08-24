import { EventEmitter } from 'events';

const emitter = new EventEmitter();
emitter.addListener('hello', (name) => {
  console.log(`Hello ${name}`);
});
emitter.addListener('hello', (name) => {
  console.log(`Woy ${name}`);
});
emitter.addListener('kuy', (name) => {
  console.log(`Kuy ${name}`);
});
emitter.emit('hello', 'Amrul Izwan');
emitter.emit('kuy', 'Eko');
