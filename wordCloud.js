/* https://www.interviewcake.com/question/javascript/word-cloud */

const isLetter = char => /[a-zA-Z]/.test(char);

const splitWords = sentence => {
  const words = [];
  let wordStartIndex = 0;
  let wordLength = 0;
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (isLetter(char)) {
      if (wordLength === 0) wordStartIndex = i;
      wordLength++;
    } else if (wordLength !== 0) {
      const word = sentence.slice(wordStartIndex, wordStartIndex + wordLength);
      words.push(word);
      wordLength = 0;
    }
  }
  return words;
};

const wordCloud = sentence => {
  const words = splitWords(sentence.toLowerCase());
  const map = new Map();

  for (word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  return map;
};

console.log(wordCloud("We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."));
console.log(wordCloud("The bill came to five dollars."));