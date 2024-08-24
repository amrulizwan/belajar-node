import process from 'process';

process.addListener('exit', (exitCode) => {
  console.log(`NodeJs Exit with code ${exitCode}`);
});

console.log(process.version);
console.table(process.argv);
console.table(process.report);

process.exit(1);

consol.info('Anjay');
