import { Console } from 'console';
import fs from 'fs';
const file = fs.createWriteStream('app.log');

const log = new Console({
  stdout: file,
  stderr: file,
});

log.info('Halo Guys');
log.error('Waduh');

const person = {
  firstName: 'Amrul',
  lastName: 'Izwan',
};

log.table(person);
