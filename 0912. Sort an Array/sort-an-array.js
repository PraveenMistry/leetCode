/**
 * @param {number[]} nums
 * @return {number[]}
 */

const swap = function (array, from, to) {
  // ES6 array destructing
  [array[from], array[to]] = [array[to], array[from]];
}


const partition = function (array, low, high) {
  const pivotIndex = low; // <1>
  let pivotFinalIndex = pivotIndex; // <2>

  for (let current = pivotIndex + 1; current <= high; current++) {
    if (array[current] < array[pivotIndex]) { // <3>
      pivotFinalIndex += 1; // <4>
      swap(array, current, pivotFinalIndex); // <5>
    }
  }

  swap(array, pivotIndex, pivotFinalIndex); // <6>
  return pivotFinalIndex;
}

const shuffle = function (array) {
  const { length } = array;
  for (let index = 0; index < length; index++) {
    const newIndex = Math.floor(Math.random() * length);
    swap(array, index, newIndex);
  }
  return array;
}

const bubbleSort = function(collection){
    const array = Array.from(nums); // <1>
    for (let i = 1; i < array.length; i++) { // <6>
        let swapped = false;

        for (let current = 0; current < array.length - i; current++) { // <4>
          if (array[current] > array[current + 1]) { // <2>
            swap(array, current, current + 1); // <3>
            swapped = true;
          }
        }

        if (!swapped) break; // <5>
      }

      return array;
}

const insertionSort = function (collection) {
  const array = Array.from(collection); // <1>

  for (let right = 1; right < array.length; right++) { // <2>
    for (let left = right; array[left - 1] > array[left]; left--) { // <3>
      swap(array, left - 1, left); // <4>
    }
  }
  return array;
}

const merge = function (array1, array2 = []) {
  const mergedLength = array1.length + array2.length;
  const mergedArray = Array(mergedLength);

  // merge elements on a and b in asc order. Run-time O(a + b)
  for (let index = 0, i1 = 0, i2 = 0;
    index < mergedLength; index++) { // <1>
    if (i2 >= array2.length
      || (i1 < array1.length && array1[i1] <= array2[i2])) {
      mergedArray[index] = array1[i1]; // <2>
      i1 += 1;
    } else {
      mergedArray[index] = array2[i2]; // <2>
      i2 += 1;
    }
  }

  return mergedArray; // <3>
}


function quickSort(array, low = 0, high = array.length - 1) {
  if (low < high) { // <4>
    const partitionIndex = partition(array, low, high); // <1>
    quickSort(array, low, partitionIndex - 1); // <2>
    quickSort(array, partitionIndex + 1, high); // <3>
  }
  return array;
}

const selectionSort = function (collection) {
  const array = Array.from(collection); // <1>

  for (let left = 0; left < array.length; left++) { // <2>
    let selection = left; // <3>

    for (let right = left + 1; right < array.length; right++) {
      if (array[selection] > array[right]) { // <4>
        selection = right; // <5>
      }
    }

    if (selection !== left) {
      swap(array, selection, left); // <6>
    }
  }

  return array;
}

// bubbleSort
var sortArray = function(nums) {
    // return bubbleSort(nums);
    return insertionSort(nums);
    // return merge(nums);

    //  quickSort
      const array = Array.from(nums); // <1>
      shuffle(array);
      return quickSort(array);

    // selectionSort(nums);
};

/* 
quickSort => 
Runtime: 221 ms, faster than 63.85% of JavaScript online submissions for Sort an Array.
Memory Usage: 55.4 MB, less than 56.34% of JavaScript online submissions for Sort an Array.
*/