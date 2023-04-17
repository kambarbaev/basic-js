const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
   constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(str, key) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }
    const ABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
    let strArr = str.split('');
    let keyArr = key.split('');
    let strIndexArr = [];
    let keyIndexArr = [];
    let encryptArr = [];
    let templateArr = [...strArr]
  
  for (let i = 0; i < templateArr.length; i++) {
      if (templateArr[i].match(/[a-zA-Z]/)) {
          templateArr[i]='';
      }
  }
    for (let i = 0; i < str.length; i++) {
      const strItem = str[i].toUpperCase();
      for (let j = 0; j < ABC.length; j++) {
        const abcItem = ABC[j];
        if (strItem === abcItem) {
          strIndexArr.push(j);
          break;
        }
      }
    }
  
    for (let i = 0; i < key.length; i++) {
      const keyItem = key[i].toUpperCase();
      for (let j = 0; j < ABC.length; j++) {
        const abcItem = ABC[j];
        if (keyItem === abcItem) {
          keyIndexArr.push(j);
          break;
        }
      }
    }
  
  
    for (let i = 0; i < strIndexArr.length; i++) {
      let original = strIndexArr[i];
      let encrypt = keyIndexArr[i % keyIndexArr.length];
      let mod26 = 26;
  
        if (original + encrypt > mod26 - 1) {
          encryptArr.push(ABC[(original + encrypt) - mod26]);
        } else {
          encryptArr.push(ABC[original + encrypt]);
        }
      }
  
  let count =0
  for(let i=0; i < templateArr.length; i++ ){
      if(templateArr[i]=== ''){
          templateArr[i]=encryptArr[count]
          count++
      }
    }
    return this.direct ? templateArr.join('') : templateArr.reverse().join('');
  }
  
  
  decrypt(str, key) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }
    const ABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
    let strArr = str.split('');
    let keyArr = key.split('');
    let strIndexArr = [];
    let keyIndexArr = [];
    let encryptArr = [];
    let templateArr = [...strArr]
  
  for (let i = 0; i < templateArr.length; i++) {
      if (templateArr[i].match(/[a-zA-Z]/)) {
          templateArr[i]='';
      }
  }
    for (let i = 0; i < str.length; i++) {
      const strItem = str[i].toUpperCase();
      for (let j = 0; j < ABC.length; j++) {
        const abcItem = ABC[j];
        if (strItem === abcItem) {
          strIndexArr.push(j);
          break;
        }
      }
    }
  
    for (let i = 0; i < key.length; i++) {
      const keyItem = key[i].toUpperCase();
      for (let j = 0; j < ABC.length; j++) {
        const abcItem = ABC[j];
        if (keyItem === abcItem) {
          keyIndexArr.push(j);
          break;
        }
      }
    }
  
  
    for (let i = 0; i < strIndexArr.length; i++) {
      let original = strIndexArr[i];
      let encrypt = keyIndexArr[i % keyIndexArr.length];
      let mod26 = 26;
  
        if (original - encrypt < 0) { 
          encryptArr.push(ABC[(original + mod26) - encrypt]);
        } else {
          encryptArr.push(ABC[original - encrypt]);
        }
      }
  
  let count =0
  for(let i=0; i < templateArr.length; i++ ){
      if(templateArr[i]=== ''){
          templateArr[i]=encryptArr[count]
          count++
      }
    }
    return this.direct ? templateArr.join('') : templateArr.reverse().join('');
  }
  
}

module.exports = {
  VigenereCipheringMachine
};
