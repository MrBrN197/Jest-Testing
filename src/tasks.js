const stringLength = string => {
  len = string.length;
  if(len < 1) {
    throw new Error('string is empty')
  }
  if( len > 10) {
    throw new Error('string length is greater than 10')
  }
  return string.length;
}

const reverseString = string => [...string].reverse().join('') 

const validate = (a, b) => {
  if(typeof a !== 'number' || typeof b != 'number'){
    throw new Error('only accepts numbers as arguments')
  }
}

const calculator = {
  add: (a, b) => {
    validate(a, b)
    return a + b;
  },
  subtract: (a, b) => {
    validate(a, b);
    return a - b;
  },
  divide: (a, b) => {
    validate(a,b);

    if(b === 0) {
      throw new Error('division by 0');
    }

    return a / b;
  },
  multiply: (a, b) => {
    validate(a, b);
    return a * b;
  }
}

module.exports = { 
  reverseString, 
  stringLength,
  calculator
}
