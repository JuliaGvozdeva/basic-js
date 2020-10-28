const CustomError = require("../extensions/custom-error");
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
   this.chain.push(`( ${value} )`);
   return this;
  },
  removeLink(position) {
    if ( typeof(position) === "number" || position - 1 >= 0 || this.chain.length >= position) {
      this.chain.splice(position- 1, 1);
    } 
    else {
      this.chain = [];
      throw "Incorrect position value";
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const answer = this.chain.join("~~");
    this.chain = [];
    return answer;
  }
};

// chainMaker.addLink(1).addLink(2).addLink(3).finishChain();

module.exports = chainMaker;
