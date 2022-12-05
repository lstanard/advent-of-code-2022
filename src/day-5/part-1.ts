import { readInput } from "../utils/readInput";

/**
 * NOTE: Kind of want to try refactoring this into discreet functions
 */
export const getPart1Answer = (inputFile = 'input.txt', reverseStacks = true) => {
  const input = readInput(__dirname, inputFile);
  const splitInput: string[] = input.split(/\n/);
  const emptyLine = splitInput.indexOf('');

  const stacks = splitInput.slice(0, emptyLine);
  stacks.splice(stacks.length - 1, stacks.length);
  const moves = splitInput.slice(emptyLine + 1, splitInput.length);

  const containers: string[][] = [];
  stacks.forEach((stack) => {
    const row = stack.match(/(\s{4}|\[.\])/g);
    row?.forEach((rowItem, index) => {
      const trimmedRowItem = rowItem.trim();
      if (trimmedRowItem !== '') {
        if (containers[index]?.length) {
          containers[index].push(rowItem);
        } else {
          containers[index] = [rowItem];
        }
      }
    });
  });

  moves.forEach((move) => {
    const [_1, count, _2, start, _3, end] = move.split(' ');
    const itemCount = Number(count);
    const sourceContainerIndex = Number(start) - 1;
    const destContainerIndex = Number(end) - 1;
    // splice off item(s) to be moved
    const items = containers[sourceContainerIndex].splice(0, itemCount);

    if (containers[destContainerIndex]?.length) {
      containers[destContainerIndex].unshift(...(reverseStacks ? items.reverse() : items));
    } else {
      containers[destContainerIndex] = reverseStacks ? items.reverse() : items;
    }
  });

  return containers.map((container) => {
    const letters = container[0]?.match(/([A-Z])/g);    
    return letters?.join('');
  }).join('');
}
