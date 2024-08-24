function samplePromise() {
  return Promise.resolve('Eko');
}

const name = await samplePromise();
console.log(name);
