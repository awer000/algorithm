function solution(s) {
  const arr = s.split(" ");
  const max1 = Math.max.apply(null, arr);
  const min1 = Math.min.apply(null, arr);
  const answer = `${min1 + ""} ${max1 + ""}`;
  return answer;
}
