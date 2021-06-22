
function breathFirstSearch(graph, fromVertex, callback) {
  const { vertices, adjacentList } = graph;

  if (vertices.length === 0) return;

  const color = vertices.reduce((c, v) => ({ ...c, [v]: COLORS.GREEN }), {});
  const queue = [];

  queue.push(fromVertex);

  while (queue.length) {
    const v = queue.shift();
    const nearVertex = adjacentList[v];
    color[v] = COLORS.YELLOW;

    nearVertex.forEach(w => {
      if (color[w] === COLORS.GREEN) {
        color[w] = COLORS.YELLOW;
        queue.push(w);
      }
    });

    color[v] = COLORS.RED;

    callback && callback(v);
  }
}