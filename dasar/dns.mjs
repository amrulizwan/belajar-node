import dns from 'dns/promises';

const address = await dns.resolveMx('aisadev.codes');

console.log(address);
