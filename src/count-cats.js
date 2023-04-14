const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  let arr = [...arguments].flat();
  let cat = '^^';
  let counter = 0;
  
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    for (let j = 0; j < item.length; j++) {
      const subitem = item[j];
      if (subitem === cat) {
        counter++;
      }
    }
    
  }
  return counter;
}

module.exports = {
  countCats
};
