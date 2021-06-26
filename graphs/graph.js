"use strict";

const Vertex = require("./vertex");
const Edge = require("./edge");

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
    this.numberOfEdges++;
  }

  //removing edge between two vertices with the removeEdge function
  removeEdge(vertex1, vertex2) {
    //finding the index of vertex1 within the edges of vertex2 and if found returns -1
    const index1 = this.edges[vertex1]
      ? this.edges[vertex1].indexOf[vertex2]
      : 1;
    const index2 = this.edges[vertex2]
      ? this.edges[vertex2].indexOf[vertex1]
      : 1;

    if (index1 >= 0) {
      this.edges[vertex1].splice(index1, 1);
      //placed inside the if statement because potentially the vertex could be empty.
      this.numberOfEdges--;
    }

    if (index2 >= 0) {
      this.edges[vertex2].splice(index2, 1);
      this.numberOfEdges--;
    }
  }

  //size of the vertices
  size() {
    return this.vertices.length;
  }

  //size of the edges
  relations() {
    return this.numberOfEdges;
  }

  findAdjacent(nodeName) {
    let adjacentNodes = [];

    this.edges.forEach(function (edge) {
      if (edge[0] === nodeName) {
        let node = this.vertices.find(function (vertex) {
          return vertex.name === edge[1];
        });
        if (node) {
          let adjacentIndex = this.vertices.indexOf(node);
          let adjacent = this.vertices.splice(adjacentIndex, 1);

          if (adjacent[0].distance === null) {
            adjacentNodes.push(adjacent[0]);
          }
        }
      } else if (edge[1] === nodeName) {
        let node = this.vertices.find(function (vertex) {
          return vertex.name === edge[0];
        });
        if (node) {
          let adjacentIndex = this.vertices.indexOf(node);
          let adjacent = this.vertices.splice(adjacentIndex, 1);

          if (adjacent[0].distance === null) {
            adjacentNodes.push(adjacent[0]);
          }
        }
      }
    });
    return adjacentNodes;
  }

  markDistanceAndPredecessor(rootNode, adjacentNodes) {
    if (rootNode.predecessor === null) {
      adjacentNodes.forEach(function (node) {
        node.predecessor = rootNode;
        node.distance = 1;
      });
    } else {
      adjacentNodes.forEach(function (node) {
        node.predecessor = rootNode;
        node.distance = rootNode.distance + 1;
      });
    }
    return adjacentNodes;
  }

  breathFirstSearch(rootNode) {
    let queue = [];
    let visited = [];
    let explored = [];

    let rootIndex = this.vertices.indexOf(rootNode);

    this.vertices.splice(rootIndex, 1);

    queue.push(rootNode);
    visited.push(rootNode);

    while (queue.length !== 0) {
      let currentNode = queue.shift();
      let adjacentNodesArray = this.findAdjacent(currentNode.name);
      adjacentNodesArray.forEach(function (node) {
        queue.push(node);
        visited.push(node);
      });
      this.markDistanceAndPredecessor(currentNode, adjacentNodesArray);
      explored.push(currentNode);
    }
    return visited;
  }

  markDiscovered(node) {
    return (node.discovered = true);
  }

  print() {
    console.log(
      this.vertices
        .map((vertex) => {
          return `${vertex} => ${this.edges[vertex].join(", ").trim()}`;
        }, this)
        .join(" | ")
    );
  }
}

module.exports = Graph;
