/* https://www.interviewcake.com/question/javascript/find-duplicate-optimize-for-space-beast-mode */

/* If has all ints from 1 ... n */
// const findDuplicate = integers => {
//   const length = integers.length;
//   const n = length - 1;

//   const sumOfOneToN = (n * (n + 1)) / 2;

//   const sumOfIntegers = integers.reduce((sum, int) => sum + int, 0);

//   return sumOfIntegers - sumOfOneToN;
// };

const findDuplicate = intArray => {
  const n = intArray.length - 1;

  // STEP 1: GET INSIDE A CYCLE
  // Start at position n+1 (end of array the "head") and walk n steps to
  // Find a position guaranteed to be in a cycle
  let positionInCycle = n + 1;
  for (let i = 0; i < n; i++) {
    positionInCycle = intArray[positionInCycle - 1];
  }

  // STEP 2: FIND THE LENGTH OF THE CYCLE
  // Find the length of the cycle by remembering a position in the cycle
  // and counting the steps it takes to get back to that position
  const rememberedPositionInCycle = positionInCycle;
  let currentPositionInCycle = intArray[positionInCycle - 1];  // 1 step ahead
  let cycleStepCount = 1;

  while (currentPositionInCycle !== rememberedPositionInCycle) {
    currentPositionInCycle = intArray[currentPositionInCycle - 1];
    cycleStepCount += 1;
  }

  // STEP 3: FIND THE FIRST NODE OF THE CYCLE
  // Start two pointers
  //   (1) at position n+1 (head)
  //   (2) ahead of position n+1 (head) as many steps as the cycle's length
  let pointerStart = n + 1;
  let pointerAhead = n + 1;
  for (let i = 0; i < cycleStepCount; i++) {
    pointerAhead = intArray[pointerAhead - 1];
  }

  // Advance until the pointers are in the same position
  // which is the first node in the cycle
  while (pointerStart !== pointerAhead) {
    pointerStart = intArray[pointerStart - 1];
    pointerAhead = intArray[pointerAhead - 1];
  }

  // Since there are multiple values pointing to the first node
  // in the cycle, its position is a duplicate in our array
  return pointerStart;
};