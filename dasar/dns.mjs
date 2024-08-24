import dns from 'dns/promises';

const address = await dns.resolveMx('aisadev.codes');

console.info(address);
