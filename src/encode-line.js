const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strArr = str.split('');
  let result = '';
  let count = 1;

  for (let i = 0; i < strArr.length; i++) {
      const element = strArr[i];
      const elementPlusOne = strArr[i + 1];
      if (element === elementPlusOne) {
      count++;
      } else {
        result += (count > 1 ? count : '') + str[i];
        count = 1;
      }
  }
  return result;
}

module.exports = {
  encodeLine
};
