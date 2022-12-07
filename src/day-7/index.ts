import { readInput } from "../utils/readInput";

const parseInput = (inputFile: string) => {
  const input: string = readInput(__dirname, inputFile);
  return input.split(/\n/);
}

const getFileSizes = (input: string[]) => {
  let pwd: string[] = [];
  const fileSizes: Record<string, number> = {};
  for (let i = 0; i < input.length; i++) {
    const line = input[i];
    const path = pwd.join();
    if (line.includes('$ cd')) {
      const cdDir = line.match(/(?<=cd\s).{1,}/g)!;
      if (cdDir && cdDir[0] === '..') {
        pwd.pop();
      } else {
        pwd.push(cdDir[0]);
      }
    } else if (line.match(/\d+/g)) {
      const fileSize = line.match(/\d+/g);
      const fileSizeNum = Number(fileSize && fileSize[0]);
      fileSizes[path] = (fileSizes[path] ?? 0) + fileSizeNum;
    }
  }
  return fileSizes;
}

export const getAnswer = (inputFile = 'input.txt', limit = 100000) => {
  const fileSizesByDir = getFileSizes(parseInput(inputFile));

  Object.entries(fileSizesByDir).forEach(([dir, size]) => {
    const fullPath = dir.split(',');
    console.log('fullPath', fullPath);
    console.log('size', size);
    if (fullPath.length > 1) {
      const parentPath = fullPath.splice(0, fullPath.length - 1);
      parentPath.forEach((subDir) => {
        
      });
      // console.log('parentPath', parentPath);
      // fileSizesByDir[parentPath] = fileSizesByDir[parentPath] + size;
    }
  });

  return fileSizesByDir;
}

// console.log(getAnswer());
console.log(getAnswer('sample-input.txt'));
