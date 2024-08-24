import zlib, { unzipSync } from 'zlib';
import fs from 'fs';

const source = fs.readFileSync('zlib.txt');
const result = zlib.unzipSync(source);

console.info(result.toString());
fs.writeFileSync('zlibs.txt', result);
