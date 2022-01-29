/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  if (!promises.length) {
    return Promise.resolve([]);
  }

  const resolved = [];

  return new Promise((res, rej) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((resolve, reject) => {
          resolved[i] = resolve;
        })
        .catch((error) => rej(error))
        .finally(() => {
          if (resolved.length === promises.length) {
            res(resolved);
          }
        });
    }
  });
}

module.exports = all;
