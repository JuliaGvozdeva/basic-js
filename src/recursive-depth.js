const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let counter = 1;

    if (arguments.length = 0) {
      return "TROWN";
    } else if (!Array.isArray(arr)) {
      counter--;
    }

    arr.forEach(item => {
      if (typeof(item) === 'object') {
        counter += this.calculateDepth(item);
      }
      depth = Math.max(depth, counter);
      counter = 1;
    });
    
    return depth;
  }
};