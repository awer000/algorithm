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

  const initializeColor = function() {
    const color = [];
    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i]] = "white";
    }
    return color;
  };

  this.bfs = (v, callback) => {
    let color = initializeColor(),
      queue = [];

    queue.push(v);

    while (queue.length !== 0) {
      let u = queue.shift(),
        neighbors = adjList.get(u);
      color[u] = "grey";
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === "white") {
          color[w] = "grey";
          queue.push(w);
        }
      }
      color[u] = "black";
      if (callback) {
        callback(u);
      }
    }
  };
  this.bfsShort = v => {
    let color = initializeColor(),
      queue = [],
      d = [],
      pred = [];
    queue.push(v);

    for (let i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0;
      pred[vertices[i]] = null;
    }

    while (queue.length !== 0) {
      let u = queue.shift(),
        neighbors = adjList.get(u);
      color[u] = "grey";
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === "white") {
          color[w] = "grey";
          d[w] = d[u] + 1;
          pred[w] = u;
          queue.push(w);
        }
      }
      color[u] = "black";
    }
    return {
      distance: d,
      predecessors: pred
    };
  };

  this.dfs = callback => {
    let color = initializeColor();

    for (let i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === "white") {
        dfsVisit(vertices[i], color, callback);
      }
    }
  };
  function dfsVisit(u, color, callback) {
    color[u] = "grey";
    if (callback) {
      callback(u);
    }
    let neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i];
      if (color[w] === "white") {
        dfsVisit(w, color, callback);
      }
    }
    color[u] = "black";
  }

  let time = 0;
  this.DFS = () => {
    let color = initializeColor(),
      d = [],
      f = [],
      p = [];
    time = 0;

    for (let i = 0; i < vertices.length; i++) {
      f[vertices[i]] = 0;
      d[vertices[i]] = 0;
      p[vertices[i]] = 0;
    }
    for (let i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === "white") {
        DFSVisit(vertices[i], color, d, f, p);
      }
    }
    return {
      discovery: d,
      finished: f,
      predecessors: p
    };
  };

  const DFSVisit = (u, color, d, f, p) => {
    console.log(`방문 ${u}`);
    color[u] = "grey";
    d[u] = ++time;
    let neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i];
      if (color[w] === "white") {
        p[w] = u;
        DFSVisit(w, color, d, f, p);
      }
    }
    color[u] = "black";
    f[u] = ++time;
    console.log(`탐색 ${u}`);
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

function printNode(value) {
  console.log(`탐색한 정점: ${value}`);
}

graph.bfs(myVertices[0], printNode);

const pathA = graph.bfsShort(myVertices[3]);
console.log(pathA);

graph.dfs(printNode);
graph.DFS();
