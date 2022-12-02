import { readInput } from "../utils/readInput";

const input = readInput(__dirname);
const splitData: string[] = input.split(/\n\s*\n/);

const largestGroup = splitData.reduce((prevGroup, currGroup) => {
  const prevGroupSum = prevGroup.split(/\n/).reduce((prev, curr) => Number(prev) + Number(curr), 0);
  const currGroupSum = currGroup.split(/\n/).reduce((prev, curr) => Number(prev) + Number(curr), 0);
  if (prevGroupSum > currGroupSum) {
    return prevGroup;
  }
  return currGroup;
});

const largestGroupSum = largestGroup.split(/\n/).reduce((prev, curr) => Number(prev) + Number(curr), 0);

// correct answer: 68787
console.log('largestGroupSum', largestGroupSum);
