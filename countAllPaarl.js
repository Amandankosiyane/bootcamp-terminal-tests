module.exports = function(regNum){
var firstRealpaarl = [];
  var paarl = regNum.split(', ');
  for(var i=0; i<paarl.length; i++){
  if(paarl[i].startsWith('CJ')){
  firstRealpaarl.push(paarl[i]);
  }
  }
 // console.log(paarl);
  return  firstRealpaarl.length;
}
