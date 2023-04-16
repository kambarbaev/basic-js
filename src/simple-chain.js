const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  'link' : [],

  getLength() {
    return this.link.length; //(this.link.flat().length);
    // remove line with error and write your code here
  },
  addLink(value) {
    this.link.push(`( ${value} )`);
    return this
    // remove line with error and write your code here
  },
  removeLink(index) {
    if ( index < 1 || index > this.link.length || index % 1 !== 0 || isNaN(index)) {
      this.link.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    if (index) {
      this.link.splice(index - 1, 1);
      return this;
    } else {
      this.link.pop();
      return this;
    }
  },
  reverseChain() {
    this.link.reverse();
    return this
    // remove line with error and write your code here
  },
  finishChain() {
    let result = this.link.join(`~~`);
    this.link.length = 0;
    return result;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
