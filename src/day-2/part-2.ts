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

const resultPoints: Record<string, number> = {
  'X': 0, // loss
  'Y': 3, // draw
  'Z': 6, // win
}

const gameOutcome: Record<string, Record<string, number>> = {
  'X': {
    'A': 3,
    'B': 1,
    'C': 2,
  },
  'Y': {
    'A': 1,
    'B': 2,
    'C': 3,
  },
  'Z': {
    'A': 2,
    'B': 3,
    'C': 1,
  }
}

let totalScore = 0;

splitData.forEach((game) => {
  const [them, result] = game.split(' ');
  totalScore = totalScore + resultPoints[result] + gameOutcome[result][them];
});

// correct answer: 10835
console.log('totalScore', totalScore);
