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
  encrypt(str, key) {
    const ABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
    let strArr = str.split('');
    let keyArr = key.split('');
    let strIndexArr = [];
    let keyIndexArr = [];
    let encryptArr = [];
    let resArr = [];
    
    for (let i = 0; i < str.length; i++) { // цикл для заполнения strIndexArr
      const strItem = str[i].toUpperCase();
      for (let j = 0; j  < ABC.length; j ++) {
        const abcItem = ABC[j];
        if (strItem === abcItem) {
          strIndexArr.push(j)
        }
      }
    }
  
  
    for (let i = 0; i < key.length; i++) {
      for (let j = 0; j < key.length; j++) {
        const element = key[j];
        ABC.forEach((e,i) => { e === element ?  keyIndexArr.push(i) : null
          }
        );
        if (keyIndexArr.length === strArr.length) {
          break;
        }
      }
    }
  
    for (let i = 0; i < strArr.length; i++) {
      let original = strIndexArr[i];
      let encrypt = keyIndexArr[i];
      let mod26 = 26;
      if (original + encrypt > mod26) {
        encryptArr.push(ABC[(original + encrypt) - mod26])
      }else {
        encryptArr.push(ABC[original + encrypt]);
      }
  
    }
  
    // for (let i= 0; i < strArr.length; i++){
    //   if(i >= keyArr.length && i < strArr.length){
    //       let index = ABC.indexOf(keyArr[i-(keyArr.length)*[Math.floor(i/keyArr.length)]]);
    //       // let index = arr.indexOf(cipher[i-(cipher.length*[Math.floor(i/cipher.length)])]);
    //       keyIndexArr.push(index);
    //   } else {
    //     let index = ABC.indexOf(keyArr[i]);
    //     keyIndexArr.push(index);
    //   }
    // }
  
  
  console.log(strArr);
  console.log(keyArr);
  console.log(strIndexArr);
  console.log(keyIndexArr);
  console.log('****');
  console.log(resArr);
  console.log('****');
  console.log(encryptArr);
  
  
  
  encrypt('PROGRAM', 'DOG');
  encrypt('attack at dawn!', 'alphonse');
  encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey');
  
    // remove line with error and write your code here
  }
  
  
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
