/* https://www.interviewcake.com/question/javascript/balanced-binary-tree */

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

/*
                  a super balanced
              b       c
            d   e   f   g

                  a super balanced
              b       c
            d   e   

                  a not super balanced
              b       c
            d   e   
          h
  get depth map
  find max depth node
  find min depth node
  make sure difference of depths is less than or equal to 1

            6
        1       0
                  7
                    8
*/

const superBalanced = node => {
  let maxDepth = 0;
  let minDepth = Infinity;
  const stack = [[node, 1]]; /* [[node, depth]] */

  while (stack.length) {
    const [{ left, right }, depth] = stack.pop();
  
    if (left || right) {
      if (right) stack.push([right, depth + 1]);
      if (left) stack.push([left, depth + 1]);
    } else {
      maxDepth = Math.max(maxDepth, depth + 1);
      minDepth = Math.min(minDepth, depth);
    };

    if (maxDepth - minDepth > 1) return false;
  }

  return true;
};

