function solution(capacities, bottles, fromId, toId) {
  for (let i = 0; i < fromId.length; i++) {
    if (bottles[fromId[i]] + bottles[toId[i]] <= capacities[toId[i]]) {
      bottles[toId[i]] = bottles[fromId[i]] + bottles[toId[i]];
      bottles[fromId[i]] = 0;
    } else {
      bottles[fromId[i]] =
        bottles[fromId[i]] - (capacities[toId[i]] - bottles[toId[i]]);
      bottles[toId[i]] = capacities[toId[i]];
    }
  }
  return bottles;
}

function solution2(capacities, bottles, fromId, toId) {
  for (let i = 0; i < fromId.length; i++) {
    let f = fromId[i];
    let t = toId[i];

    let vol = Math.min(bottles[f], capacities[t] - bottles[t]);

    bottles[f] -= vol;
    bottles[t] += vol;
  }
  return bottles;
}

console.log(solution2([20, 20], [5, 8], [0], [1])); // [0, 13]
console.log(
  solution2(
    [700000, 800000, 900000, 1000000],
    [478478, 478478, 478478, 478478],
    [2, 3, 2, 0, 1],
    [0, 1, 1, 3, 2]
  )
);
