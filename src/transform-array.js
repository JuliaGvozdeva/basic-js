const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 const exNext = "--discard-next",
      exPrev = "--discard-prev",
      dobNext = "--double-next",
      dobPrev = "--double-prev";
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === exNext) {
      if (i !== arr.length - 1) {
        i++;
        continue;
      }
    } else if (arr[i] === exPrev) {
      if (newArr.length && arr[i - 2] !== exNext) {
        newArr.pop();
        continue;
      }
    } else if (arr[i] === dobNext) {
      if (i < arr.length - 1) {
        newArr.push(arr[i+1]);
        continue;
      }
    } else if (arr[i] === dobPrev) {
      if (i && arr[i - 2] !== exNext) {
        newArr.push(arr[i-1]);
        continue;
      }
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

// transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);