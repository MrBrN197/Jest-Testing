const stringLength = str => {
  if(str.length < 1) {
    throw new Error('string is empty')
  }
  if(str.length > 10) {
    throw new Error('string length is greater than 10')
  }
  return str.length;
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

const capitalize = (string) => {
  return [string[0].toUpperCase(), ...string.slice(1)].join('')
};

module.exports = { 
  reverseString, 
  stringLength,
  capitalize,
  calculator
}
