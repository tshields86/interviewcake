/* https://www.interviewcake.com/question/javascript/inflight-entertainment */

// const twoMovies = (flightLength, movieLengths) => {
//   movieLengths.sort((a, b) => a - b);

//   let a = 0;
//   let b = movieLengths.length - 1;

//   while (a < b) {
//     const twoMoviesLength = movieLengths[a] + movieLengths[b];
//     if (twoMoviesLength > flightLength) b--;
//     else if (twoMoviesLength < flightLength) a++
//     else return true;
//   }

//   return false;
// };

const twoMovies = (flightLength, movieLengths) => {
  const watched = new Set();

  for (const movieLength of movieLengths) {
    const moviePair = flightLength - movieLength;
    if (watched.has(moviePair)) return true;
    watched.add(movieLength);
  };

  return false;
};

console.log(twoMovies(
  120,
  [110, 140, 40, 20, 120, 60, 80, 60]
)); // true

console.log(twoMovies(
  120,
  [110, 140, 40, 20, 120, 60, 85]
)); // false

console.log(twoMovies(
  120,
  [110, 140, 40, 20, 120, 60, 85, 60]
)); // true