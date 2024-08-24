import zlib from 'zlib';
import fs from 'fs';

const source = fs.readFileSync('zlib.mjs');
const result = zlib.gzipSync(source);

fs.writeFileSync('zlib.txt', result);
