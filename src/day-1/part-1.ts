const fs = require('fs');

try {
  const data = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');
  const splitData: string[] = data.split(/\n\s*\n/);

  const largestGroup = splitData.reduce((prevGroup, currGroup) => {
    const prevGroupSum = prevGroup.split(/\n/).reduce((prev, curr) => Number(prev) + Number(curr), 0);
    const currGroupSum = currGroup.split(/\n/).reduce((prev, curr) => Number(prev) + Number(curr), 0);
    if (prevGroupSum > currGroupSum) {
      return prevGroup;
    }
    return currGroup;
  });

  const largestGroupSum = largestGroup.split(/\n/).reduce((prev, curr) => Number(prev) + Number(curr), 0);
  console.log('largestGroupSum', largestGroupSum);
} catch (err) {
  console.error(err);
}
