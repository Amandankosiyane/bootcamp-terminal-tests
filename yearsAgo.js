module.exports = function(year) {
var date = new Date();
  var whichYear =date.getFullYear();
  var resultString = whichYear - year;
  console.log(resultString);
  return resultString;
};
