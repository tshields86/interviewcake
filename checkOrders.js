/* https://www.interviewcake.com/question/javascript/cafe-order-checker */

const checkOrders = (takeOut, dineIn, served) => {
  if (takeOut.length + dineIn.length !== served.length) return false;

  let takeOutIdx = 0;
  let dineInIdx = 0;

  for (let servedOrder of served) {
    if (servedOrder === takeOut[takeOutIdx]) {
      takeOutIdx++;
    } else if (servedOrder === dineIn[dineInIdx]) {
      dineInIdx++;
    } else return false;
  }

  return true;
};

console.log(checkOrders(
  [1, 3, 5],
  [2, 4, 6],
  [1, 2, 4, 6, 5, 3]
)); // false

console.log(checkOrders(
  [17, 8, 24],
  [12, 19, 2],
  [17, 8, 12, 19, 24, 2]
)); // true

console.log(checkOrders(
  [],
  [12, 19, 2],
  [12, 19, 2]
)); // true

console.log(checkOrders(
  [17, 8, 24],
  [],
  [17, 8, 24]
)); // true

console.log(checkOrders(
  [],
  [],
  []
)); // true

console.log(checkOrders(
  [17, 8, 24, 30],
  [12, 19, 2],
  [17, 8, 12, 19, 24, 2]
)); // false