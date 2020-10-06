/* https://www.interviewcake.com/question/javascript/recursive-string-permutations */

/* 
cat
cta
atc
act
tac
tca
*/

const recursivePermutations = (string) => {
  if (string.length <= 1) return new Set([string]);

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  const permutationsOfAllCharsExceptLast = recursivePermutations(allCharsExceptLast);

  const permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(permutationOfAllCharsExceptLast => {
    for (let position = 0; position <= allCharsExceptLast.length; position++) {
      const permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
      permutations.add(permutation);
    }
  });

  return permutations;
};

console.log(recursivePermutations('cat'));