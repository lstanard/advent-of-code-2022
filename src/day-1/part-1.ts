import { readInput } from "../utils/readInput";

export const getPart1Answer = (inputFile = 'input.txt') => {
  const input = readInput(__dirname, inputFile);
  const splitData: string[] = input.split(/\n\s*\n/);

  const largestGroup = splitData.reduce((prevGroup, currGroup) => {
    const prevGroupSum = prevGroup.split(/\n/).reduce((prev, curr) => Number(prev) + Number(curr), 0);
    const currGroupSum = currGroup.split(/\n/).reduce((prev, curr) => Number(prev) + Number(curr), 0);
    if (prevGroupSum > currGroupSum) {
      return prevGroup;
    }
    return currGroup;
  });

  return largestGroup.split(/\n/).reduce((prev, curr) => Number(prev) + Number(curr), 0);
}

// correct answer: 68787
// console.log(getPart1Answer());
