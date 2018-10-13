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

// 가장 최소값에 1을 더하면 모두 곱했을때 가장 큰 수가 나온다는 사실을 이용한 코드

function solution2(arr) {
  arr = arr.sort((a, b) => a - b);
  arr[0]++;
  return arr.reduce((a, b) => a * b);
}

console.log(solution2([1, 2, 3]));
console.log(solution2([1, 3, 2, 1, 1, 3]));
console.log(solution2([1000, 999, 998, 997, 996, 995]));
console.log(solution2([1, 1, 1, 1]));
