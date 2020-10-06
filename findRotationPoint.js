/* https://www.interviewcake.com/question/javascript/find-rotation-point */

const findRotationPoint = words => {
  const firstWord = words[0];

  let floorIdx = 0;
  let ceilIdx = words.length - 1;

  while (floorIdx < ceilIdx) {
    const midIdx = Math.floor(((ceilIdx - floorIdx) / 2) + floorIdx);
    if (words[midIdx] >= firstWord) {
      floorIdx = midIdx;
    } else {
      ceilIdx = midIdx;
    }

    if (floorIdx + 1 === ceilIdx) {
      break;
    }
  }

  return ceilIdx;
};

console.log(findRotationPoint(
  [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
  ]
));

console.log(findRotationPoint(
  [
    'xenoepist',
    'asymptote',
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
  ]
));

console.log(findRotationPoint(
  [
    'asymptote',
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
  ]
));

/* 
const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];
*/