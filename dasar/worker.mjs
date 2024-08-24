import { threadId, Worker } from 'worker_threads';

const worker1 = new Worker('./workers.mjs');
const worker2 = new Worker('./workers.mjs');
worker1.addListener('message', (message) => {
  console.log(`Thread-${threadId} Received from worker 1 : ${message}`);
});
worker2.addListener('message', (message) => {
  console.log(`Thread-${threadId} Received from worker 2 : ${message}`);
});
worker1.postMessage(10);
worker2.postMessage(10);
