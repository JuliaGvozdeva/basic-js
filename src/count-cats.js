module.exports = function countCats(matrix) {
  let counter = 0;
  matrix.forEach(element => {
    element.forEach(item => {
      if (item === "^^") {
        counter++;
      }
    });
  });
  return counter;
};

// countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]);

