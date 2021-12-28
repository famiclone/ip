const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

function pipe(funcs) {
  return function (a) {
    let result = a;
    funcs.forEach((func) => {
      result = func(result);
    });

    return result;
  };
}

const c = pipe([times(2), plus(1), subtract(5), divide(2)]);
console.log(c(10));
