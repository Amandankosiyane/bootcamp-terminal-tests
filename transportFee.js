module.exports = function(shifts){
switch(shifts){
  case 'morning':
    return 'R20';
  case 'afternoon':
    return 'R10';
  case 'nightshift':
    return 'free'
  default:
    return 'none';
             }
}
