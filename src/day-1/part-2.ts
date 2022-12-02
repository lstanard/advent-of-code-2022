import { readInput } from "../utils/readInput";

const input = readInput(__dirname);
const splitData: string[] = input.split(/\n\s*\n/);

const groupSumStore: number[] = [];
splitData.forEach((group) => {
  const groupSum = group.split(/\n/).reduce((prev, curr) => Number(prev) + Number(curr), 0);
  groupSumStore.push(groupSum);
});

const sortedGroupSums = groupSumStore.sort((a, b) => b - a);
const sumOfTopThree = sortedGroupSums.splice(0, 3).reduce((a, b) => a + b);

// correct answer: 198041
console.log('sumOfTopThree', sumOfTopThree);
