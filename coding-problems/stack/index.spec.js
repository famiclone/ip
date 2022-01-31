const Stack = require('.');

describe('Stack', () => {
  it('returns correct size', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.size()).toBe(2);
  });

  it('has no elements', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);
    expect(stack.getTop()).toBe(null);
  });

  it('returns last element and became empty', () => {
    const stack = new Stack();
    const element = 'test';
    stack.push(element);

    expect(stack.pop()).toBe(element);
    expect(stack.isEmpty()).toBe(true);
  });

  it('returns last element', () => {
    const stack = new Stack();
    const element = 'test';
    stack.push(element);

    expect(stack.getTop()).toBe(element);
    expect(stack.isEmpty()).toBe(false);
  });
});
