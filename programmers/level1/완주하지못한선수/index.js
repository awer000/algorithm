function solution(part, comp) {
  const p = part.sort();
  const c = comp.sort();

  for (let i = 0; i < part.length; i++) {
    if (p[i] !== c[i]) {
      return p[i];
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["kiki", "eden"]));
