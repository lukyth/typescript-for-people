/// <reference path="../typings/jest/jest.d.ts" />

import { Captcha } from '../src/Captcha'

describe('Captcha', function() {
  describe('pattern 1', function() {
    it('should be "1 + Two" when left=1, right=2, operator=1', function() {
      var captcha = new Captcha();
      expect(captcha.generate(1, 1, 2, 1)).toEqual('1 + Two');
    });

    it('should be "1 + Three" when left=1, right=3, operator=1', function() {
      var captcha = new Captcha();
      expect(captcha.generate(1, 1, 3, 1)).toEqual('1 + Three');
    });

    it('should be "1 - Three" when left=1, right=3, operator=2', function() {
      var captcha = new Captcha();
      expect(captcha.generate(1, 1, 3, 2)).toEqual('1 - Three');
    });

    it('should be "1 * Three" when left=1, right=3, operator=3', function() {
      var captcha = new Captcha();
      expect(captcha.generate(1, 1, 3, 3)).toEqual('1 * Three');
    });
  });

  describe('pattern 2', function() {
    it('should be "1 + Two" when left=1, right=2, operator=1', function() {
      var captcha = new Captcha();
      expect(captcha.generate(2, 1, 2, 1)).toEqual('One + 2');
    });

    it('should be "1 + Three" when left=1, right=3, operator=1', function() {
      var captcha = new Captcha();
      expect(captcha.generate(2, 1, 3, 1)).toEqual('One + 3');
    });

    it('should be "1 - Three" when left=1, right=3, operator=2', function() {
      var captcha = new Captcha();
      expect(captcha.generate(2, 1, 3, 2)).toEqual('One - 3');
    });

    it('should be "1 * Three" when left=1, right=3, operator=3', function() {
      var captcha = new Captcha();
      expect(captcha.generate(2, 1, 3, 3)).toEqual('One * 3');
    });
  });
});
