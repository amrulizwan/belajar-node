import fs from 'fs';

const writer = fs.createWriteStream('stream.log');
writer.write('Amrul Izwan\n');
writer.write('Kelas\n');
writer.end;

const reader = fs.createReadStream('stream.log');
reader.addListener('data', (data) => {
  console.info(data.toString());
});
