import os from 'os';

console.log(os.platform());
console.log(os.arch());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.hostname());

console.table(os.networkInterfaces());
