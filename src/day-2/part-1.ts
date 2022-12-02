const fs = require('fs');

// https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable
export {};

try {
  const data = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');
  const splitData: string[] = data.split(/\n/);

  /**
   * Notes:
   * a = rock
   * b = paper
   * c = scissors
   * 
   * x = rock
   * y = paper
   * z = scissors
   * 
   * rock = 1 pt
   * paper = 2 pt
   * scissor = 3 pt
   * 
   * loss = 0 pt
   * draw = 3 pt
   * win = 6 pt
   */

  let totalScore = 0;
  splitData.forEach((game) => {
    const [them, me] = game.split(' ');
    let roundScore = 0;

    // tally points from which choice I made
    if (me === 'Z') {
      roundScore = roundScore + 3;
    } else if (me === 'Y') {
      roundScore = roundScore + 2;
    } else if (me === 'X') {
      roundScore = roundScore + 1;
    }
    
    // determine who won the match
    if (them === 'A' && me === 'X') {
      // draw
      roundScore = roundScore + 3;
    } else if (them === 'A' && me === 'Y') {
      // win
      roundScore = roundScore + 6;
    } else if (them === 'A' && me === 'Z') {
      // loss
    } else if (them === 'B' && me === 'X') {
      // loss
    } else if (them === 'B' && me === 'Y') {
      // draw
      roundScore = roundScore + 3;
    } else if (them === 'B' && me === 'Z') {
      // win
      roundScore = roundScore + 6;
    } else if (them === 'C' && me === 'X') {
      // win
      roundScore = roundScore + 6;
    } else if (them === 'C' && me === 'Y') {
      // loss
    } else if (them === 'C' && me === 'Z') {
      // draw
      roundScore = roundScore + 3;
    }

    totalScore = totalScore + roundScore;
  });

  console.log('totalScore', totalScore);
} catch (err) {
  console.error(err);
}
