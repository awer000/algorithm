function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i]++;
    if (answer < arr.reduce((a, b) => a * b)) {
      answer = arr.reduce((a, b) => a * b);
      arr[i]--;
    } else {
      arr[i]--;
    }
  }
  return answer;
}

console.log(solution([1, 2, 3]));
console.log(solution([1, 3, 2, 1, 1, 3]));
console.log(solution([1000, 999, 998, 997, 996, 995]));
console.log(solution([1, 1, 1, 1]));
