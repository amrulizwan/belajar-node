import util from 'util';
const firstName = 'Amrul';
const lastName = 'Izwan';
console.log(util.format('Nama : %s %s', firstName, lastName));

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

console.log(util.format('Person : %j', person[0].firstName));
