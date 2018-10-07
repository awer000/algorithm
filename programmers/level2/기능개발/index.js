function solution(progresses, speeds) {
  let list = makeList(progresses, speeds);
  let answer = [];
  let number = 1;

  return list;
}

function makeList(progresses, speeds) {
  const list = [];
  for (let i = 0; i < speeds.length; i++) {
    list.push({ progress: progresses[i], speed: speeds[i] });
  }
  return list;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
