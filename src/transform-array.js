const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
      }
  let resArr = arr.slice()
  console.log(resArr);
  for (let i = 0; i < resArr.length; i++) {
    const item = resArr[i];
    if (item === '--double-next') {
      if(i === arr.length - 1) {
        resArr.splice(i, 1);
      }else {
        resArr.splice( i, 1, resArr[i + 1]);
        // i++;
      }
    }else if (item === '--double-prev') {
      if (i === 0) {
        resArr.splice(0,1)
      }else {
        resArr.splice( i, 1, resArr[i - 1])
      }
    }else if (item === '--discard-prev') {
      if (i === 0) {
        resArr.splice(0,1);
      }else {
        resArr.splice( i - 1, 2);
      }
    }else if (item === '--discard-next') {
      if (i === resArr.length - 1) {
        resArr.splice(i, 1);
      }else {
        if (typeof resArr[i + 2] === 'string') {
          console.log(resArr[i + 3]);
          resArr.splice( i, 3);
        }else {
          resArr.splice( i, 2);
          i--;
        }
      }
    }
  }
  return resArr;
  // remove line with error and write your code here
}



module.exports = {
  transform
};
