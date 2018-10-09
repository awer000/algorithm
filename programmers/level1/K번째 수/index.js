function solution(array, commands) {
  let answer = commands
    .map(val => array.slice(val[0] - 1, val[1]))
    .map((value, i) => value.sort((a, b) => a - b));

  commands = commands.map(value => value[2]);
  for (let i = 0; i < answer.length; i++) {
    answer[i] = answer[i][commands[i] - 1];
  }
  return answer;
}
