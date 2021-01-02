const swap = function (array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const indexOfMinimum = function (array, startIndex) {
  let minValue = array[startIndex];
  let minIndex = startIndex;

  for (let i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

const selectionSort = function (array) {
  let minIndex = 0;
  for (var i = 0; i < array.length; i++) {
    minIndex = indexOfMinimum(array, i);
    swap(array, i, minIndex);
  }
};

const array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
console.log('Array after sorting:  ' + array);
