function solution(clothes) {
  let obj = {};
  for (let i = 0; i < clothes.length; i++) {
    if (obj[clothes[i][1]] !== undefined) {
      obj[clothes[i][1]]++;
    } else {
      obj[clothes[i][1]] = 1;
    }
  }

  const answer = Object.values(obj);
  // return obj;
  return answer.length === 1
    ? answer[0]
    : answer.reduce((a, b) => (a + 1) * (b + 1) - 1);
}

console.log(
  solution([
    ["hat", "headgear"],
    ["sunglassess", "eyewear"],
    ["turban", "headgear"]
  ])
);
