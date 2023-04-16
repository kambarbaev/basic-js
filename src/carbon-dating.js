const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(args) {
  // let args = [...arguments];
  const t =  0.693 / HALF_LIFE_PERIOD;

  if (typeof args === "string" && +args > 0 && +args <= 15){
    let dpmPerGramm = +args;
    if(dpmPerGramm) {
      let age = Math.ceil(Math.log(MODERN_ACTIVITY / dpmPerGramm) / t);
      return age;
    }
  } return false
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
