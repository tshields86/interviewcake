/* https://www.interviewcake.com/question/javascript/top-scores */

const HIGHEST_POSSIBLE_SCORE = 100;

const sortScores = (scores, maxScore = HIGHEST_POSSIBLE_SCORE) => {
  const scoreCount = new Array(maxScore + 1);
  for (const score of scores) {
    scoreCount[score] = (scoreCount[score] || 0) + 1;
  }

  const sortedScores = [];

  for (let score = scoreCount.length - 1; score >= 0; score--) {
    let count = scoreCount[score];
    while (count && count > 0) {
      sortedScores.push(score);
      count--;
    }
  }

  return sortedScores;
};


console.log(sortScores([37, 89, 41, 65, 91, 53]));
console.log(sortScores([37, 89, 41, 91, 65, 91, 53, 65]));
console.log(sortScores([37, 89, 100, 41, 91, 53, 0]));
console.log(sortScores([]));