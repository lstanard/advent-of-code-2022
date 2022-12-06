import { readInput } from "../utils/readInput";

const parseInput = (inputFile: string) => {
  const input: string = readInput(__dirname, inputFile);
  return input;
}

export const getPart1Answer = (inputFile = 'input.txt') => {
  const input = parseInput(inputFile);
  const chars = input.split('');

  for (let index = 3; index < chars.length; index++) {
    const prevElements = chars.slice(index - 3, index);
    const group = [chars[index], ...prevElements];
    const groupSet = new Set(group);
    if (groupSet.size === group.length) {
      return index + 1;
    }
  }
}

// console.log(getPart1Answer('sample-input.txt'));

// correct answer: 1816
console.log(getPart1Answer());
