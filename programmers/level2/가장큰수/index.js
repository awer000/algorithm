function solution(numbers) {
  numbers = numbers.map(val => "" + val);
  numbers = numbers.sort().reverse();
  return numbers;
  return numbers.reduce((a, b) => a + b);
}

console.log(solution([21, 212]));
