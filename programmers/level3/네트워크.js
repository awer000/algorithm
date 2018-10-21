function solution(n, computers) {
  let answer = 0;
  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers[i].length; j++) {
      if (i === j) continue;
      if (computers[i][j] === 1) answer++;
    }
  }
  if (answer === 0) return n;
  return n - answer / 2;
}

console.log(
  solution(5, [
    [1, 1, 1, 0, 1],
    [1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
    [1, 0, 0, 1, 1]
  ])
);
