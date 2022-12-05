import { readInput } from "../utils/readInput";

export const getPart1Answer = (inputFile = 'input.txt') => {
  const input = readInput(__dirname, inputFile);
  const splitInput: string[] = input.split(/\n/);
  const emptyLine = splitInput.indexOf('');

  const stacks = splitInput.slice(0, emptyLine);
  const columns = stacks.slice(stacks.length - 1, stacks.length)[0].trim().split('').filter((v) => v.trim().length).length;
  // console.log('columns', columns);
  stacks.splice(stacks.length - 1, stacks.length);
  // console.log('stacks', stacks);
  const moves = splitInput.slice(emptyLine + 1, splitInput.length);
  // console.log('moves', moves);

  const containers: (string|null)[][] = [];
  stacks.forEach((stack) => {
    const row = stack.match(/(\s{4}|\[.\])/g);
    row?.forEach((rowItem, index) => {
      if (containers[index + 1]?.length) {
        containers[index + 1].push(rowItem.trim() === '' ? null : rowItem);
      } else {
        containers[index + 1] = [rowItem.trim() === '' ? null : rowItem];
      }
    });
  });

  console.log('containers', containers);
}

// answer: CMZ
console.log(getPart1Answer('sample-input.txt'));
// console.log(getPart1Answer());
