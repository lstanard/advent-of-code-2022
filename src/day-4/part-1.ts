import { readInput } from "../utils/readInput";

export const getPart1Answer = (inputFile = 'input.txt') => {
  const input = readInput(__dirname, inputFile);
  const pairs: string[] = input.split(/\n/);

  return pairs.reduce<string[]>((collection, currPair) => {
    const [one, two] = currPair.split(',');
    const [oneStart, oneEnd] = one.split('-');
    const [twoStart, twoEnd] = two.split('-');
    if ((Number(oneStart) >= Number(twoStart) && Number(oneEnd) <= Number(twoEnd)) 
        || (Number(twoStart) >= Number(oneStart) && Number(twoEnd) <= Number(oneEnd))) {
      collection.push(currPair)
    }
    return collection;
  }, []).length;
}
