import { readInput } from "../utils/readInput";

const parseInput = (inputFile: string) => {
  const input: string = readInput(__dirname, inputFile);
  return input;
}

export const getAnswer = (inputFile = 'input.txt', packetLength = 3) => {
  const input = parseInput(inputFile);
  const chars = input.split('');

  for (let index = packetLength; index < chars.length; index++) {
    const prevElements = chars.slice(index - packetLength, index);
    const group = [chars[index], ...prevElements];
    const groupSet = new Set(group);
    if (groupSet.size === group.length) {
      return index + 1;
    }
  }
}

// correct answer: 1816
console.log(getAnswer());

// correct answer: 2625
console.log(getAnswer('input.txt', 13));
