/* https://www.interviewcake.com/question/javascript/graph-coloring */

class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'white'];

const colorGraph = (graph, colors) => {

};