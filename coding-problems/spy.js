function add(a, b) {
  return a + b;
}

function spy(f) {
  function wrap(...args) {
    wrap.calls.push(args);
    return f.call(this, ...args);
  }

  wrap.calls = [];

  return wrap;
}

add = spy(add);

add(2, 7);
add(11, 7);

add.calls; // [[2, 7], [11, 7]]
