import _ from 'underscore';
import Quote from 'app/models/quote';

describe('Quote', function() {
  describe('math', function() {
    it('Does math', function() {
      expect(true).toBeTruthy();
      const quote = new Quote();
      expect(quote.doMath(3)).toBe(5);
    });
  });
});
