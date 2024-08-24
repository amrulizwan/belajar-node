import fs from 'fs/promises';

const buffer = await fs.readFile('fs.mjs');

console.info(buffer.toString());

await fs.writeFile('temp.txt', 'Hello Node Js');
