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

console.log(solution([20, 20], [5, 8], [0], [1])); // [0, 13]
