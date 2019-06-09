function solution(answer) {
  let binary_answer = "" ;
  answer.split("").map(item => {
    if (item === "Y") {
      binary_answer = binary_answer + '0'
    } else {
      binary_answer = binary_answer + '1'
    }
  })
  return parseInt(Number(binary_answer), 2) + 1; 
}

console.log(solution("YNNY"))