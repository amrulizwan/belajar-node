import { EventEmitter } from 'events';

const emitter = new EventEmitter();
emitter.addListener('hello', (name) => {
  console.info(`Hello ${name}`);
});
emitter.addListener('hello', (name) => {
  console.info(`Woy ${name}`);
});
emitter.addListener('kuy', (name) => {
  console.info(`Kuy ${name}`);
});
emitter.emit('hello', 'Amrul Izwan');
emitter.emit('kuy', 'Eko');
