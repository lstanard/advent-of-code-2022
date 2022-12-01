const fs = require('fs');

try {
  const data = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');
  const splitData: string[] = data.split(/\n\s*\n/);

  const groupSumStore: number[] = [];
  splitData.forEach((group) => {
    const groupSum = group.split(/\n/).reduce((prev, curr) => Number(prev) + Number(curr), 0);
    groupSumStore.push(groupSum);
  });

  const sortedGroupSums = groupSumStore.sort((a, b) => b - a);
  const sumOfTopThree = sortedGroupSums.splice(0, 3).reduce((a, b) => a + b);
  console.log('sumOfTopThree', sumOfTopThree);
} catch (err) {
  console.error(err);
}
