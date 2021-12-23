function pow(base, power) {
  let result = 1;

  if (power == 0) {
    return result;
  } else if (power < 0) {
    return result / pow(base, Math.abs(power));
  }

  result = base;

  function _pow(_base, power) {
    if (power <= 1) {
      return _base;
    } else {
      result *= base;
      return _pow(result, power - 1);
    }
  }

  _pow(base, power);

  return result;
}
