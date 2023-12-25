const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let setS1 = new Set(s1);
  let strArr2 = s2.split('');
  let resultArr = [];

  for (const item of setS1) {
    for (let j = 0; j < strArr2.length; j++) {
      const elementJ = strArr2[j];
      if (item === elementJ) {
        resultArr.push(strArr2.splice(j,1));
      }
    }
  }
  return resultArr.length;
}

module.exports = {
  getCommonCharacterCount
};
