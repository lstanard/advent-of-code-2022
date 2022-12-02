const fs = require('fs');

export const readInput = (dir: string, fileName = 'input.txt') => {
  try {
    const data = fs.readFileSync(`${dir}/${fileName}`, 'utf8');
    return data;
  } catch (error) {
    console.error(error);
  }
}
