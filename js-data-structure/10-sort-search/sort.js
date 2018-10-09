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
  this.toString = () => {
    return arr.join();
  };
}

const arr = new ArrayList([1, 6, 2, 5, 3, 4]);
arr.selectionSort();
console.log(arr.toString());
