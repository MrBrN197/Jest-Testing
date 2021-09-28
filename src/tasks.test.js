
const { stringLength, reverseString, capitalize, calculator } = require('./tasks');


describe('Task 1', () => {
  it('throw when string length is less than 1', () => {
    const string = '';
  })
  
  it('throws when greater than 10', () => {
    const string = '012345678910';
    expect(() => stringLength(string)).toThrow();
  })
})

describe('Task 2', () => {
  
  it('returns a reversed lowercase string', () => {
    const string = 'hello, world';
    const result = reverseString(string);
    expect(result).toBe('dlrow ,olleh');
  })

  it('return a reversed uppercase string', () => {
    const string = 'LEVEL';
    const result = reverseString(string);
    expect(result).toBe('LEVEL');
  })

})

