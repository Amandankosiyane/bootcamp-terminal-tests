module.exports = function(regNumber,location){
var registration = [];
  var countTown = regNumber.split( ',' );
  for(var i=0; i<countTown.length; i++){
  var countRegNum = countTown[i].trim();
    if(countRegNum.startsWith(location)){
    registration.push(countTown[i]);
    }
  }
  //console.log(registration);
  return registration.length;
}
