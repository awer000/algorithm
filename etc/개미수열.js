function solution(s) {
  let answer = [];
  let arr = [];
  while (s.length !== 0) {
    if (s[0] === s[1]) {
      arr.push(s[0]);
      s = s.replace(s[0], "");
    } else {
      arr.push(s[0]);
      s = s.replace(s[0], "");
      answer.push(arr);
      arr = [];
    }
  }
  let value = "";
  answer.forEach(val => {
    value += `${val[0]}${val.length}`;
  });
  return value;
}

function ant(n) {
  if (n === 1) return "1";
  return solution(ant(n - 1));
}

console.log(ant(3));
