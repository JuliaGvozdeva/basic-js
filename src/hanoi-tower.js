const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let answer = {
    turns: '',
    seconds: ''
  };
  answer.turns = Math.pow(2,disksNumber) - 1;
  answer.seconds = Math.floor(answer.turns*3600 / turnsSpeed);
  return answer;

};
