const Queue = require('.');

describe('Queue', () => {
  it('is empty', () => {
    const queue = new Queue();

    expect(queue.size()).toBe(0);
  });
});
