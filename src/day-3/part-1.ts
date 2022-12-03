import { readInput } from "../utils/readInput";

export const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const getPart1Answer = (inputFile = 'input.txt') => {
  const input = readInput(__dirname, inputFile);
  const splitData: string[] = input.split(/\n/);

  return splitData.map((fullContents) => {
    const allValues = fullContents.split('');
    const half = Math.floor(allValues.length / 2)
    const leftHalf = allValues.slice(0, half);
    const rightHalf = allValues.slice(half, allValues.length);

    let commonValue = 0;
    for (let index = 0; index < leftHalf.length; index++) {
      if (rightHalf.includes(leftHalf[index])) {
        commonValue = alphabet.indexOf(leftHalf[index]) + 1;
        break;
      }
    }
    return commonValue;
  }).reduce((prev, curr) => prev + curr);
}
