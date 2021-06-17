'use strict';

BFS(node) {
  let q = new Queue(this.node.length);
  let explored = new Set();
  q.enqueue(node);

  add(node);

  whle(!q.Empty()) {
    let t = q.dequeue();
    console.log(t);

    this.edge[t]
      .filter(n => !explored.has(n))
      .forEach(n => {
        explored.add(n);
        q.enqueue(n);
      });
  }
}