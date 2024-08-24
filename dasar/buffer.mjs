const buffer = Buffer.from('Amrul Izwan', 'utf8');

console.info(buffer.toString('base64'));
console.info(buffer.toString('hex'));

const b64 = Buffer.from('QW1ydWwgSXp3YW4=', 'base64');
console.info(b64.toString('utf8'));
