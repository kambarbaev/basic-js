const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) {
    return false;
  }

  let resArr = [];

  for (let i = 0; i < members.length; i++) {
    const element = members[i];
    if (typeof element === 'string') {
      resArr.push(element.trim()[0].toUpperCase());
    }
  }
  // console.log(resArr)
  return resArr.sort().join('');
}


module.exports = {
  createDreamTeam
};

// function createDreamTeam(members) {
//   if (!Array.isArray(members) || members.length === 0) {
//     return false;
//   }

//   let resArr = [];

//   for (let i = 0; i < members.length; i++) {
//     const element = members[i];
//     if (typeof element === 'string') {
//       resArr.push(element.trim()[0].toUpperCase());
//     }
//   }
//   // console.log(resArr)
//   return resArr.sort().join('');
// }