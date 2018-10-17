function solution(friends) {
  function fIndex(s) {
    const indexList = [];
    s = s.split("");
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "Y") indexList.push(i);
    }
    return indexList;
  }

  const newF = friends.map((val, i) => ({
    relation: val,
    directF: fIndex(val).length
  }));
  const newF2 = newF.map(val => ({
    ...val,
    fIndex: fIndex(val.relation)
      .map(val => newF[val].directF - 1)
      .reduce((a, b) => a + b)
  }));

  return Math.max(...newF2.map(val => val.directF + val.fIndex));
}

console.log(solution(["NYNNN", "YNYNN", "NYNYN", "NNYNY", "NNNYN"]));
console.log(
  solution([
    "NNNNYNNNNN",
    "NNNNYNYYNN",
    "NNNYYYNNNN",
    "NNYNNNNNNN",
    "YYYNNNNNNY",
    "NNYNNNNNYN",
    "NYNNNNNYNN",
    "NYNNNNYNNN",
    "NNNNNYNNNN",
    "NNNNYNNNNN"
  ])
);
