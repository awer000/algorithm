function solution(s) {
  if (
    s ===
    s
      .split("")
      .reverse()
      .join("")
  )
    return s.length;
  let num = 0;
  let original = s;

  while (
    s !==
    s
      .split("")
      .reverse()
      .join("")
  ) {
    s = original;
    const piece = s
      .substring(0, num)
      .split("")
      .reverse()
      .join("");
    s = s + piece;
    num++;
  }
  return s.length;
}

console.log(solution("abab"));
console.log(solution("abacaba"));
console.log(solution("qwerty"));
console.log(solution("a;lskdjfkldsjflkdjslkfjslkfjwww"));
