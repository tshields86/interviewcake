/* https://www.interviewcake.com/question/javascript/merging-ranges */

const mergeRanges = meetings => {
  meetings.sort((a, b) => a.startTime - b.startTime);

  return meetings.reduce((merged, block) => {
    const lastBlock = merged[merged.length - 1];

    if (block.startTime <= lastBlock.endTime) {
      lastBlock.endTime = Math.max(lastBlock.endTime, block.endTime);
    } else merged.push(block);

    return merged;
  }, [meetings[0]])
};

console.log(mergeRanges(
  [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ]
));

console.log(mergeRanges(
  [
    { startTime: 1, endTime: 3 },
    { startTime: 2, endTime: 4 }
  ]
));
