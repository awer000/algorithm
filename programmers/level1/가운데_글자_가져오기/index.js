function solution(s) {
  const findMid = s.length % 2;
  const mid = findMid === 1 ? Math.floor(s.length / 2) : s.length / 2;
  return findMid === 1 ? s[mid] : `${s[mid - 1]}${s[mid]}`;
}
