function solution(n) {
  let answer = 1;
  let range = Math.floor(n / 2) + 1;
  let sum;

  for (let i = 1; i < range; i++) {
    sum = i;
    for (let j = i + 1; j <= range && sum < n; j++) {
      sum += j;
      if (sum === n) {
        answer++;
      }
    }
  }
  return answer;
}

console.log(solution(15));
