
const { stringLength } = require('./tasks');


describe('Task 1', () => {
  it('throw when string length is less than 1', () => {
    const string = '';
    expect(() => stringLength(string)).toThrow();
  })
  
  it('throws when greater than 10', () => {
    const string = '012345678910';
    expect(() => stringLength(string)).toThrow();
  })
})
