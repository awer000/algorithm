function solution(citations) {
  if (citations.reduce((a, b) => a + b) === 0) return 0;
  if (citations.length === 1) {
    return citations[0] === 1 ? 1 : 0;
  }
  citations = citations.sort((a, b) => a - b);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] < i + 1) {
      return i;
    }
  }
  // const max = Math.max(...citations);
  // const length = citations.length;
  // const min = Math.min(max, length);

  // for (let i = min; i >= 0; i--) {
  //   let count = 0;
  //   for (let num of citations) {
  //     // console.log(num);
  //     if (num >= i) {
  //       count += 1;
  //     }
  //   }
  //   if (count === i) {
  //     return i;
  //   }
  // }
}

console.log(solution([6, 5, 3, 1, 0]));
