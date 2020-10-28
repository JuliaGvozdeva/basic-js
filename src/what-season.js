const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length === 0) {
    return "Unable to determine the time of year!";
  }
  
  if (date.hasOwnProperty("toString")) {
    throw Error();
  }

  try {
    const month = date.getMonth();
    switch(month){
      case 0:
      case 1:
      case 11:
          return "winter";
      case 2:
      case 3:
      case 4:
          return "spring";
      case 5:
      case 6:
      case 7:
          return "summer";
      case 8:
      case 9:
      case 10:
          return "autumn";
    } 
  } catch (error) {
    return TROWN;
  }
};

// const springDate = new Date(1601, 0, 0, 16, 26, 37, 664)
// console.log(springDate);
// getSeason(springDate);