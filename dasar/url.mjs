import { URL } from 'url';

const aisadev = new URL('https://aisadev.codes');
aisadev.pathname = 'kelas';
aisadev.searchParams.append('status', 'premium');

console.info(aisadev.toString());
console.info(aisadev.href);
console.info(aisadev.protocol);
console.info(aisadev.host);
console.info(aisadev.pathname);
console.info(aisadev.searchParams);
