import util from 'util';
const firstName = 'Amrul';
const lastName = 'Izwan';
console.info(util.format('Nama : %s %s', firstName, lastName));

const person = [
  {
    firstName: 'Amrul',
    lastName: 'Izwan',
  },
  {
    firstName: 'Reli',
    lastName: 'irawan',
  },
];

console.info(util.format('Person : %j', person[0].firstName));
