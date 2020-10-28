const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name = '';
  let arr = [];
  try {
    members.forEach((item) => {
      if (typeof(item) === 'string') {
        arr.push(item.trim().toUpperCase());
      }
    });
    arr.sort();
    arr.forEach(element => {
      if (typeof(element) === 'string') {
        name += element[0];
      }
    });
  
    return name;
  } catch (error) {
    return false;
  }
  
};
// createDreamTeam([
//   ['David Abram'],
//   ['Robin Attfield'],
//   'Thomas Berry',
//   ['Paul R.Ehrlich'],
//   'donna Haraway',
//   ' BrIaN_gOodWiN  ',
//   {
//     0: 'Serenella Iovino'
//   },
//   'Erazim Kohak',
//   '  val_plumwood',
// ]);