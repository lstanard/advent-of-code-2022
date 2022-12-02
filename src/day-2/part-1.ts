import { readInput } from "../utils/readInput";

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

const input = readInput(__dirname);
const splitData: string[] = input.split(/\n/);

const choicePoints: Record<string, number> = {
  'X': 1,
  'Y': 2,
  'Z': 3
};

const gameOutcome: Record<string, number> = {
  'AX': 3,
  'BY': 3,
  'CZ': 3,
  'AY': 6,
  'BZ': 6,
  'CX': 6
}

let totalScore = 0;

splitData.forEach((game) => {
  const [them, me] = game.split(' ');
  totalScore = totalScore + choicePoints[me] + (gameOutcome[`${them}${me}`] || 0);
});

// correct answer: 12156
console.log('totalScore', totalScore);
