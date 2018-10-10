function ArrayList(arr = []) {
  function swap(a, b) {
    [arr[a], arr[b]] = [arr[b], [arr[a]]];
  }
  this.insert = item => {
    arr.push(item);
  };

  this.bubbleSort = () => {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        num++;
        if (arr[j] > arr[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
    console.log(num); // 교환을 몇 번 하는가?
  };

  this.selectionSort = () => {
    const length = arr.length;
    let indexMin;
    for (let i = 0; i < length - 1; i++) {
      indexMin = i;
      for (let j = i; j < length; j++) {
        if (arr[indexMin] > arr[j]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        swap(i, indexMin);
      }
    }
  };

  this.insertionSort = () => {
    let j, temp;
    for (let i = 1; i < arr.length; i++) {
      j = i;
      temp = arr[i];
      while (j > 0 && arr[j - 1] > temp) {
        arr[j] = arr[j - 1];
        j--;
      }
      arr[j] = temp;
    }
  };

  const mergeSortRec = arr => {
    const length = arr.length;
    if (length === 1) {
      return arr;
    }
    const mid = Math.floor(length / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid, length);

    return merge(mergeSortRec(left), mergeSortRec(right));
  };

  const merge = (left, right) => {
    let result = [],
      il = 0,
      ir = 0;
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }
    while (il < left.length) {
      result.push(left[il++]);
    }
    while (ir < right.length) {
      result.push(right[ir++]);
    }
    return result;
  };

  this.mergeSort = () => {
    arr = mergeSortRec(arr);
  };
  const swapQuickSort = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  const partition = (arr, left, right) => {
    const pivot = arr[Math.floor((left + right) / 2)];
    let i = left,
      j = right;
    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }
      while (arr[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swapQuickSort(arr, i, j);
        i++;
        j--;
      }
    }
    return i;
  };

  const quick = (arr, left, right) => {
    let index;

    if (arr.length > 1) {
      index = partition(arr, left, right);

      if (left < index - 1) {
        quick(arr, left, index - 1);
      }
      if (index < right) {
        quick(arr, index, right);
      }
    }
  };

  this.quickSort = () => {
    quick(arr, 0, arr.length - 1);
  };

  this.toString = () => {
    return arr.join();
  };
}

const arr = new ArrayList([3, 5, 1, 6, 4, 7, 2]);
arr.quickSort();
console.log(arr.toString());
