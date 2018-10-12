function solution(n) {
  n = Number(n);
  for (let i = n + 1; i <= 1000000; i++) {
    if (
      n
        .toString(2)
        .split("")
        .filter(val => val === "1").length ===
      Number(i)
        .toString(2)
        .split("")
        .filter(val => val === "1").length
    ) {
      return i;
    }
  }
}
