import { readInput } from "../utils/readInput";

/**
 * Notes:
 * x = loss
 * y = draw
 * z = win
 * 
 * For example, first 2 rounds:
 * - opponent scissors (C), win match (Z), I chose rock (A)
 *   round score = 1pt + 6pt = 7pt
 */

const input = readInput(__dirname);
const splitData: string[] = input.split(/\n/);

let totalScore = 0;

splitData.forEach((game) => {
  const [them, result] = game.split(' ');
  let roundScore = 0;

  if (result === 'X') {
    // loss
    if (them === 'A') {
      // scissors
      roundScore = roundScore + 3;
    } else if (them === 'B') {
      // rock
      roundScore = roundScore + 1;
    } else if (them === 'C') {
      // paper
      roundScore = roundScore + 2;
    }
  } else if (result === 'Y') {
    // draw
    roundScore = roundScore + 3;

    if (them === 'A') {
      // rock
      roundScore = roundScore + 1;
    } else if (them === 'B') {
      // paper
      roundScore = roundScore + 2;
    } else if (them === 'C') {
      // scissors
      roundScore = roundScore + 3;
    }
  } else if (result === 'Z') {
    // win
    roundScore = roundScore + 6;

    if (them === 'A') {
      // paper
      roundScore = roundScore + 2;
    } else if (them === 'B') {
      // scissors
      roundScore = roundScore + 3;
    } else if (them === 'C') {
      // rock
      roundScore = roundScore + 1;
    }
  }

  totalScore = totalScore + roundScore;
});

console.log('totalScore', totalScore);
