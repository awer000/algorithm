function solution(bridge_length, weight, truck_weights) {
  let answer = 0,
    totalWeight = 0,
    time = 0;
  let trucks = truck_weights.map(value => new Truck(bridge_length, value));
  let inBridge = [];

  totalWeight += trucks[0].weight;
  inBridge.push(trucks.shift());
  trucks.map(value => value.time--);

  while (inBridge.length !== 0) {
    inBridge.map(value => value.time--);

    if (inBridge[0].time < 0) {
      totalWeight -= inBridge.shift().weight;
    }

    if (trucks.length !== 0 && totalWeight + trucks[0].weight <= weight) {
      totalWeight += trucks[0].weight;
      inBridge.push(trucks.shift());
    }
    time++;
  }
  return time;
}

class Truck {
  constructor(time, weight) {
    this.time = time;
    this.weight = weight;
  }
}
