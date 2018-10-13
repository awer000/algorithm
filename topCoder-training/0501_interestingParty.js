function solution(first, second) {
  const hobbyList = [...new Set([...first, ...second])].map(value => ({
    hobby: value,
    num: 0
  }));
  const human = [];

  for (let i = 0; i < first.length; i++) {
    human.push({ id: i, hobby: `${first[i]} ${second[i]}` });
  }

  for (let i = 0; i < hobbyList.length; i++) {
    for (let j = 0; j < human.length; j++) {
      if (human[j].hobby.indexOf(hobbyList[i].hobby) >= 0) {
        hobbyList[i].num++;
      }
    }
  }
  return hobbyList.sort((a, b) => b.num - a.num)[0].num;
}

console.log(
  solution(
    ["fishing", "gardening", "swimming", "fishing"],
    ["hunting", "fishing", "fishing", "biting"]
  )
);
console.log(
  solution(
    ["snakes", "programming", "cobra", "monty"],
    ["python", "python", "anaconda", "python"]
  )
);
