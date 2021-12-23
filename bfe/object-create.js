/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  if (typeof proto !== 'object' || !proto) {
    throw new Error("Proto isn't an object");
  }

  function Factory() {}
  Factory.prototype = proto;

  return new Factory();
}
