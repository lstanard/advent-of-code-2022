import { getPart1Answer } from "./part-1";
import { getPart2Answer } from "./part-2";

describe('Day 1', () => {
  describe('Part 1', () => {  
    it('should return correct answer with sample input', () => {
      expect(getPart1Answer('sample-input.txt')).toEqual(24000);
    });
    it('should return correct answer with real input', () => {
      expect(getPart1Answer()).toEqual(68787);
    });
  });
  describe('Part 2', () => {  
    it('should return correct answer with sample input', () => {
      expect(getPart2Answer('sample-input.txt')).toEqual(45000);
    });
    it('should return correct answer with real input', () => {
      expect(getPart2Answer()).toEqual(198041);
    });
  });
});
