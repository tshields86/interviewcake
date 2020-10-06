/* https://www.interviewcake.com/question/javascript/product-of-other-numbers */

const getProductsOfAllIntsExceptAtIndex = integers => {
  const productsExceptIndex = [];

  let productSoFar = 1;
  for (let i = 0; i < integers.length; i++) {
    productsExceptIndex[i] = productSoFar;
    productSoFar *= integers[i];
  }

  productSoFar = 1;
  for (let i = integers.length - 1; i >= 0; i--) {
    productsExceptIndex[i] *= productSoFar;
    productSoFar *= integers[i];
  }

  return productsExceptIndex;
};

/* 
productSoFar => 1
[1, 7, 3, 4]

productSoFar => 184
[1, 1, 7, 21]

[84, 12, 28, 21]
*/

console.log(getProductsOfAllIntsExceptAtIndex(
  [1, 7, 3, 4]
));
console.log(getProductsOfAllIntsExceptAtIndex(
  [1, -7, 3, 4]
));
console.log(getProductsOfAllIntsExceptAtIndex(
  [1, -7, -3, 4]
));
console.log(getProductsOfAllIntsExceptAtIndex(
  [1, 0, 3, 4]
));
console.log(getProductsOfAllIntsExceptAtIndex(
  []
));
console.log(getProductsOfAllIntsExceptAtIndex(
  [1]
));