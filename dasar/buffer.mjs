const buffer = Buffer.from('Amrul Izwan', 'utf8');

console.log(buffer.toString('base64'));
console.log(buffer.toString('hex'));

const b64 = Buffer.from('QW1ydWwgSXp3YW4=', 'base64');
console.log(b64.toString('utf8'));
