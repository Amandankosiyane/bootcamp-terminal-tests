module.exports = function(regNum, location){
var registration =regNum.endsWith(location);
  console.log('registration', + " " + location);
  return registration;
};
