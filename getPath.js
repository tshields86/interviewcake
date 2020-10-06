/* https://www.interviewcake.com/question/javascript/mesh-message */

// A simple, somewhat inefficient queue implementation
class Queue {
  constructor() {
    this.data = [];
    this.size = 0;
  }

  enqueue(item) {
    this.data[this.size] = item;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    this.size--;
    return this.data.shift();
  }

  isEmpty() {
    return this.size === 0;
  }
}

const reconstructPath = (previousNodes, node) => {
  const path = [node];

  while (previousNodes.get(node) !== null) {
    const previousNode = previousNodes.get(node);
    path.push(previousNode);
    node = previousNode;
  }

  return path.reverse();
}

const getPath = (graph, startNode, endNode) => {
  if (
    !graph.hasOwnProperty(startNode) ||
    !graph.hasOwnProperty(endNode)
  ) {
    throw new Error('Node not in graph');
  }

  const nodesToVisit = new Queue();
  nodesToVisit.enqueue(startNode);

  const prevNodes = new Map([[startNode, null]]);

  while (!nodesToVisit.isEmpty()) {
    const node = nodesToVisit.dequeue();
    if (node === endNode) return reconstructPath(prevNodes, node);

    for (const neighbor of graph[node]) {
      if (!prevNodes.has(neighbor)) {
        nodesToVisit.enqueue(neighbor);
        prevNodes.set(neighbor, node);
      }
    }
  }

  return null;
};

const graph = {
  'Min': ['William', 'Jayden', 'Omar'],
  'William': ['Min', 'Noam'],
  'Jayden': ['Min', 'Amelia', 'Ren', 'Noam'],
  'Ren': ['Jayden', 'Omar'],
  'Amelia': ['Jayden', 'Adam', 'Miguel'],
  'Adam': ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  'Miguel': ['Amelia', 'Adam', 'Liam', 'Nathan'],
  'Noam': ['Nathan', 'Jayden', 'William'],
  'Omar': ['Ren', 'Min', 'Scott'],
};

console.log(getPath(graph, 'Jayden', 'Adam')); /*   ['Jayden', 'Amelia', 'Adam'] */