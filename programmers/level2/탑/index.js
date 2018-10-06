function solution(heights) {
  const checked = [];
  const answer = [];
  checked.push(heights.shift());
  answer.push(0);

  while (heights.length !== 0) {
    for (let i = checked.length - 1; i >= 0; i--) {
      if (checked[i] > heights[0]) {
        answer.push(i + 1);
        break;
      }
      if (checked[i] <= heights[0] && i === 0) {
        // checked 배열을 왼쪽까지 다 확인했을 경우에 없으니까 push(0)을 해주는 조건까지 추가 해줘야 한다.
        answer.push(0);
      }
    }
    checked.push(heights.shift());
  }

  return answer;
}

console.log(solution([3, 9, 9, 3, 5, 7, 2]));
