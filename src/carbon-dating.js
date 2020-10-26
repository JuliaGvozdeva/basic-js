const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
};
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }
  sampleActivity = +sampleActivity;
  if (!isNaN(sampleActivity) && (sampleActivity > 0 && sampleActivity <= MODERN_ACTIVITY)) 
  {
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) /
      (Math.round(Math.LN2 * 1000) / 1000 / HALF_LIFE_PERIOD));
  }
  return false;
};

// dateSample('WOOT');