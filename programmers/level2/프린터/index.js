function solution(priorities, location) {
  let document = priorities.map(
    (value, index) => new Document(value, index, index)
  );
  let myDocument = [];
  while (document.length !== 1) {
    for (let i = 1; i < document.length; i++) {
      // console.log(`시작`);
      // console.log(document);

      if (
        document[0].importance >= document[i].importance &&
        i === document.length - 1
      ) {
        myDocument.push(document.shift());
        document = document.map(value => ({
          ...value,
          changedIndex: value.changedIndex - 1
        }));
        // console.log(document.length);
        break;
      } else if (document[0].importance >= document[i].importance) {
        continue;
      } else {
        document = document.map(value => ({
          ...value,
          changedIndex: value.changedIndex - 1
        }));
        document[0].changedIndex += document.length;
        document.push(document.shift());
        break;
      }
      // console.log(`끝`);
      // console.log(document);
    }
  }
  myDocument.push(document[0]);
  return myDocument.findIndex(value => value.originalIndex === location) + 1;
}

class Document {
  constructor(importance, index) {
    this.importance = importance;
    this.originalIndex = index;
    this.changedIndex = index;
  }
}

console.log(solution([2, 1, 3, 2], 2));
