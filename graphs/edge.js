'use strict';

const Vertex = require('./Vertex');
// this is the line between vertexes
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

module.exports = Edge;
