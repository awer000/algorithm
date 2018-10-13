function solution(capacities, bottles, fromId, toId) {
  for (let i = 0; i < fromId.length; i++) {
    let fromBottle = bottles[fromId[i]];
    let toBottle = bottles[toId[i]];
    let toCapacity = capacities[toId[i]];
    if (fromBottle + toBottle <= toCapacity) {
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
