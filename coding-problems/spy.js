function add(a, b) {
  return a + b;
}

function spy(f) {
  function wrap(...args) {
    wrap.calls.push(args);
    return f(...args);
  }

  wrap.calls = [];

  return wrap;
}

add = spy(add);

add(11, 7);
add(2, 7);

add.calls;
