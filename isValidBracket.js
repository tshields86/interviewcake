/* https://www.interviewcake.com/question/javascript/bracket-validator */

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const OPEN_TOKENS = new Set(['(', '{', '[']);
const CLOSE_TOKENS = new Set([')', '}', ']']);
const TOKEN_PAIRS = new Map([
  ['(',')'],
  ['{','}'],
  ['[',']'],
]);
const isOpenToken = char => OPEN_TOKENS.has(char);
const isCloseToken = char => CLOSE_TOKENS.has(char);
const isMatchingToken = (open, close) => TOKEN_PAIRS.get(open) === close;

const isValidBracket = code => {
  const tokenStack = new Stack();

  for (let char of code) {
    if (isOpenToken(char)) tokenStack.push(char);
    else if (isCloseToken(char)) {
      const lastOpenToken = tokenStack.pop();
      if (!isMatchingToken(lastOpenToken, char)) return false;
    }
  }

  return tokenStack.isEmpty();
};
