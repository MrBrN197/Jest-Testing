
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

describe('Task 3', () => {
  
  const { add, subtract, divide, multiply } = calculator;

  describe('add', () => {
    it('adds to positive number', () => {
      const a = 3, b = 3;
      const result = add(a,b);
      expect(result).toBe(6)
    })
  
    it('two negative number', () => {
      const a = -3, b = -3;
      const result = add(a,b);
      expect(result).toBe(-6)
    })
  
    it('throws if not a number is passed', () => {
      const a = 3, b = null;
      expect(() => add(a,b)).toThrow()
    })
  
  })
  
  describe('subtrack', () => {
    it('subtracts to positive number', () => {
      const a = 3, b = 3;
      const result = subtract(a,b);
      expect(result).toBe(0)
    })
  
    it('subtracks negative number', () => {
      const a = -3, b = -3;
      const result = subtract(a,b);
      expect(result).toBe(0)
    })
  
    it('throws if not a number is passed', () => {
      const a = 3, b = null;
      expect(() => subtract(a,b)).toThrow()
    })
  })
  
  describe('divide', () => {
    it('divides to positive number', () => {
      const a = 5, b = 2;
      const result = divide(a,b);
      expect(result).toBe(2.5)
    })
  
    it('division by 0 throws', () => {
      const a = -3, b = 0;
      expect(() => divide(a,b)).toThrow()
    })
  
    it('throws if not a number is passed', () => {
      const a = 3, b = null;
      expect(() => divide(a,b)).toThrow()
    })
  })
  
  describe('multiply', () => {
    it('multiply to positive number', () => {
      const a = 5, b = 2;
      const result = multiply(a,b);
      expect(result).toBe(10)
    })
  
    it('multiply two negative numbers', () => {
      const a = -3, b = -3;
      const result = multiply(a,b);
      expect(result).toBe(9)
    })
  
    it('throws if not a number is passed', () => {
      const a = 3, b = null;
      expect(() => multiply(a,b)).toThrow()
    })
  })

})

