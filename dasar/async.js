function samplePromise() {
  return Promise.resolve('Eko');
}

async function run() {
  const name = await samplePromise();
  console.log(name);
}

run();
