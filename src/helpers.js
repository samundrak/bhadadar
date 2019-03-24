export const randomInt = (min = 1, max = 20) => Math.floor(Math.random() * (max - min + 1)) + min;
export const randomNepalImage = (min = 1, max = 5) => `nepal_${randomInt(min, max)}.jpg`;
export function synchronousPromiseResolver(promises) {
  const copyOfPromises = [...promises];
  const promisesAnswer = [];

  return new Promise((resolve, reject) => {
    const prResolver = function (promise) {
      if (!promises.length || !promise || typeof promise !== 'function') {
        return resolve(promisesAnswer);
      }
      promise()
        .then((data) => {
          promisesAnswer.push(data);
          prResolver(copyOfPromises.shift());
        })
        .catch((err) => {
          reject(err);
        });
    };
    prResolver(copyOfPromises.shift());
  });
}
