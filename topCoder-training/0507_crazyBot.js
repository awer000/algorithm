function solution(n, east, west, south, north) {
  let grid = [];
  for (let i = 0; i < 100; i++) {
    grid.push(new Array(100));
  }
  // 이차원 배열을 만들어 둔다. 이곳은 로봇이 움직이는 터다.

  let vx = [1, -1, 0, 0];
  let vy = [0, 0, 1, -1];
  // 동, 서, 남, 북으로 움직였을 때 +를 해줌.
  // grid[50][50] 에서 시작해서 grid[51][50]인 경우는 동으로 움직인 것이다.
  // 사실 남으로 움직인거 아닌가...

  let prob = [];
  prob[0] = east / 100;
  prob[1] = west / 100;
  prob[2] = south / 100;
  prob[3] = north / 100;
  // 인자로 받은 확률 숫자를 100으로 나눠준다. 모든 방향의 합은 항상 100이다.

  return dfs(50, 50, n);

  function dfs(x, y, n) {
    if (grid[x][y]) return 0;
    if (n === 0) return 1;
    grid[x][y] = true;
    let ret = 0;

    for (let i = 0; i < 4; i++) {
      ret += dfs(x + vx[i], y + vy[i], n - 1) * prob[i];
    }
    grid[x][y] = false;

    return ret;
  }
}

console.log(solution(2, 25, 25, 25, 25));
