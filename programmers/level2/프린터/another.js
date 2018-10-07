function solution(priorities, location) {
  let answer = 1;
  while (priorities.length > 0) {
    // 프로퍼티 받아온 배열 길이가 아무것도 없을때까지 실행
    let max = 0;
    for (let i = 1; i < priorities.length; i++) {
      if (priorities[max] < priorities[i]) {
        max = i;
      }
    }
    // 위 코드는 받은 프로퍼티 배열 값 중에 가장 큰 값의 index를 찾아 max에 저장하고 있다.

    let temp = priorities.splice(0, max); // 배열 0부터 가장 큰값 바로 앞까지 자른다.

    priorities = priorities.concat(temp); // 자른 배열을 바로 뒤에 다시 붙인다.

    location -= max; // 자리가 바뀌고 난 뒤의 내 location 값을 다시 설정한다. max 값만큼 앞으로 옮겨갔기에 그 숫자를 빼준다.
    if (location < 0) {
      location += priorities.length;
    } // 설정한 location 값이 제일 큰 값보다 앞에 있을때 location 값 재조정.
    if (location === 0) {
      break;
    } // location이 0일때는 while문 종료

    priorities.shift();
    answer++;
    location--;
  }

  return answer;
}

// ==================== 더 짧은 함수 ================================
function solution(priorities, location) {
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t
  }));
  var count = 0;
  while (true) {
    var cur = list.splice(0, 1)[0];
    if (list.some(t => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}
