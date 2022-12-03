import { readInput } from "../utils/readInput";
import { alphabet } from "./part-1";

export const getPart2Answer = (inputFile = 'input.txt') => {
  const input: string = readInput(__dirname, inputFile);
  
  // split array input into groups of 3 lines
  const groups = input.match(/(?=[\s\S])(?:.*\n?){1,3}/g);
  
  return groups?.map((group) => {
    const splitData = group.split(/\n/).map((str) => str.split('')).filter((s) => s.length);

    // find the common value
    // @ts-ignore
    const result = splitData.shift().filter(function(v) {
      return splitData.every(function(a) {
        return a.indexOf(v) !== -1;
      });
    })[0];
    return alphabet.indexOf(result) + 1;
  }).reduce((prev, curr) => prev + curr);
}
