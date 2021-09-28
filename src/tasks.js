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

module.exports = { 
  reverseString, 
  stringLength,
}