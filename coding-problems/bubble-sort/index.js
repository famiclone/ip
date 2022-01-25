function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const tmp = arr[i];

        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
    }
  }

  return arr;
}

module.exports = bubbleSort;
