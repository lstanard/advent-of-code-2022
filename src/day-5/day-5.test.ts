import { getPart1Answer } from "./part-1";

describe('Day 5', () => {
  describe('Part 1', () => {  
    it('should return correct answer with sample input', () => {
      expect(getPart1Answer('sample-input.txt')).toEqual('CMZ');
    });
    it('should return correct answer with real input', () => {
      expect(getPart1Answer()).toEqual('TGWSMRBPN');
    });
  });
  describe('Part 2', () => {  
    it('should return correct answer with sample input', () => {
      expect(getPart1Answer('sample-input.txt', false)).toEqual('MCD');
    });
    it('should return correct answer with real input', () => {
      expect(getPart1Answer('input.txt', false)).toEqual('TZLTLWRNF');
    });
  });
});
