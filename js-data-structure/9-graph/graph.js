const Dictionary = require("../7_dictionary_hash/dictionary");

function Graph() {
  const vertices = [];
  const adjList = new Dictionary();

  this.addVertex = v => {
    vertices.push(v);
    adjList.set(v, []);
  };
  this.addEdge = (v, w) => {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };
  this.toString = () => {
    return adjList.values();
  };
}

const graph = new Graph();
const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
myVertices.forEach(val => graph.addVertex(val));
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log(graph.toString());
