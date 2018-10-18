function solution(genres, plays) {
  const answer = {};

  for (let i = 0; i < genres.length; i++) {
    if (!answer[genres[i]]) {
      answer[genres[i]] = [{ plays: plays[i], index: i }];
    } else {
      answer[genres[i]].push({ plays: plays[i], index: i });
    }
  }

  for (let k in answer) {
    console.log(answer[k]);
  }
  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
