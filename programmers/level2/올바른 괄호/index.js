function solution(s) {
  const stack = [];
  for (let val of s) {
    if (stack.length >= 0 && val === "(") {
      stack.push(val);
    } else if (stack.length !== 0 && val === ")") {
      stack.pop();
    } else if (stack.length >= 0 && val === ")") {
      return false;
    }
  }
  return stack.length === 0 && true;
}
