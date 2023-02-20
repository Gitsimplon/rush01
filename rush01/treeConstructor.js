function treeConstructor(strArr) {
  const parents = {};
  const children = {};

  for (const pair of strArr) {
    const [child, parent] = pair.replace(/[()]/g, '').split(',');

    if (parents[parent]) {
      parents[parent].push(child);
      if (parents[parent].length > 2) {
        return false;
      }
    } else {
      parents[parent] = [child];
    }

    if (children[child]) {
      return false;
    } else {
      children[child] = parent;
    }
  }
}

console.log(treeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
console.log(treeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));

module.exports = treeConstructor;
