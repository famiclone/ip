function binarySearch(arr, q) {
  const mid = Math.ceil(arr.length / 2) - 1;
  const midValue = arr[mid];

  if (midValue) {
    if (midValue.id < q) {
      return binarySearch(arr.slice(mid, arr.length - 1), q);
    } else if (midValue.id > q) {
      return binarySearch(arr.slice(0, mid), q);
    } else if (midValue.id === q) {
      return midValue;
    }
  }
  return -1;
}

const users = [
  { id: 1, name: 'Jon Snow' },
  { id: 2, name: 'Jane Snow' },
  { id: 3, name: 'Jim Snow' },
  { id: 4, name: 'Kurt Rainbow' },
  { id: 5, name: 'John Smith' },
  { id: 6, name: 'Jane Smith' },
  { id: 7, name: 'Mr. Sun' },
];

console.log(binarySearch(users, 5));
