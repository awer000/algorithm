function solution(arr1, arr2) {
  let list1 = [];
  for (let i = 0; i < arr1.length; i++) {
    let list2 = [];
    let num = 0;
    let answer = 0;
    console.log(num);
    while (num < arr2.length) {
      let n2 = 0;
      for (let j = 0; j < arr1[i].length; j++) {
        answer += arr1[i][j] * arr2[j][n2 + num];
        console.log(answer);
      }
      num++;
      list2.push(answer);
      console.log(answer);
      console.log(`--------`);
      answer = 0;
    }
    console.log(`한타임 끝`);
    num = 0;
    list1.push(list2);
  }
  return list1;
}

console.log(
  solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]])
);
