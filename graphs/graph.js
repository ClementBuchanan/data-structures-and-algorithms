const { serialize } = require("v8");

class Graph {
  constructor() {
    this.vertices = [];
    this.edges = [];
    this.numberOfEdges = 0;
  }

  addVertex(vertex) {
    this.vertices.push(vertex);

    this.edges[vertex] = [];
  }

  removeVertex(vertex) {
    //indexOf returns a value of -1
    const index = this.vertices.indexOf(vertex);

    if (index >= 0) {
      //deletes the element at the index
      this.vertices.splice(index, 1);
    }
    //whole there are edges for this vertex
    while (this.edges[vertex].length) {
      const adjacentVertex = this.edges[vertex].pop(); //pop takes the last element in the array and pops it

      this.removeEdge(adjacentVertex, vertex);
    }
  }

  //adding edge between two vertices with the addEgde function
  addEdge(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
    this.numberOfEdgess++;
  }

  //removing edge between two vertices with the removeEdge function
  removeEdge(vertex1, vertex2) {

    //finding the index of vertex1 within the edges of vertex2 and if found returns -1
    const index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf[vertex2] : 1;
    const index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf[vertex1] : 1;

    if (index1 >= 0) {
      this.edges[vertex1].splice(index1, 1);
      //placed inside the if statement because potentially the vertex could be empty. 
      this.numberOfEdges--;
    }

    if (index2 >= 0) {
      this.edges[vertex2].splice(index2, 1);
    }
  }

  //size of the vertices
  size() {
    return this.vertices.length;
  }

  //size of the edges
  relations() {
    this.numberOfEdges;
  }

  //print all the vertices within the graph.
  //Prints all values for the vertex.
  //Joins all the vertices in the vertex array.
  //trim white spaces on the side
  print() {
    console.log(this.vertices.map(vertex => {
      return `${vertex} => ${this.edges[vertex].join(', ').trim()}`
    }, this).join(' | '));
  }
}

(function test() {
  let graph = new Graph();
  graph.addVertex('Node1');
  graph.addVertex('Node2');
  graph.addVertex('Node3');
  graph.addVertex('Node4');

  graph.addEdge('Node1', 'Node2');
  graph.addEdge('Node1', 'Node3');
  graph.addEdge('Node2', 'Node3');

  // graph.removeVertex('Node4');

  graph.print();
})();
