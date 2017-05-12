module.exports = function(isFromBellville) {
var registration = isFromBellville.startsWith('CY');
  console.log(registration);
  return registration;
};
