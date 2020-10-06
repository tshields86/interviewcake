/* https://www.interviewcake.com/question/javascript/matching-parens */

/* 
"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

10         ^                                                                    ^

*/

const getClosingParen = (sentence, openingParenIndex) => {
  let openParenCount = 0;

  for (let position = openingParenIndex; position < sentence.length; position++) {
    const char = sentence[position];

    if (char === '(') {
      openParenCount++;
    } else if (char === ')') {
      openParenCount--;
      if (openParenCount === 0) {
        return position;
      }
    }
  }

  throw new Error('No closing paran parenthesis');
};

console.log(getClosingParen(
  'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.',
  10
))