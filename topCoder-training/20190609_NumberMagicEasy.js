function solution(answer) {
  const binary_answer = [] ;
  answer.split("").map(item => {
    if (item === "Y") {
      binary_answer.push(0)
    } else {
      binary_answer.push(1)
    }
  })
  return parseInt(Number(binary_answer.join("")), 2) + 1; 
}

console.log(solution("YNNY"))