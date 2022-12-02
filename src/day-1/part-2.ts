import { readInput } from "../utils/readInput";

export const getPart2Answer = (inputFile = 'input.txt') => {
  const input = readInput(__dirname, inputFile);
  const splitData: string[] = input.split(/\n\s*\n/);

  const groupSumStore: number[] = [];
  splitData.forEach((group) => {
    const groupSum = group.split(/\n/).reduce((prev, curr) => Number(prev) + Number(curr), 0);
    groupSumStore.push(groupSum);
  });

  const sortedGroupSums = groupSumStore.sort((a, b) => b - a);
  return sortedGroupSums.splice(0, 3).reduce((a, b) => a + b);
};

// correct answer: 198041
// console.log(getPart2Answer());
