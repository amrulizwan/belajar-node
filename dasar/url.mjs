import { URL } from 'url';

const aisadev = new URL('https://aisadev.codes');
aisadev.pathname = 'kelas';
aisadev.searchParams.append('status', 'premium');

console.log(aisadev.toString());
console.log(aisadev.href);
console.log(aisadev.protocol);
console.log(aisadev.host);
console.log(aisadev.pathname);
console.log(aisadev.searchParams);
