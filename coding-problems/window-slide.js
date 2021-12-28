let findMaxSlidingWindow = function (arr, window_size) {
  let result = [];

  const stepsCount = arr.length - (window_size - 1);

  for (let i = 0; i < stepsCount; i++) {
    const newArr = [];
    for (let j = 0; j < window_size; j++) {
      newArr.push(arr[i + j]);
    }
    result.push(Math.max(...newArr));
  }

  return result;
};
