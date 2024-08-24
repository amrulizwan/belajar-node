import process from 'process';

process.addListener('exit', (exitCode) => {
  console.info(`NodeJs Exit with code ${exitCode}`);
});

console.info(process.version);
console.table(process.argv);
console.table(process.report);

process.exit(1);

consol.info('Anjay');
