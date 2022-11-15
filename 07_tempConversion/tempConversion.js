const ftoc = function(temp) {
  //F - 32 * 5/9 = C  (5/9)=.5556
  let cels = Number(((temp - 32) * .5556).toFixed(1));
  return cels;
};

const ctof = function(temp) {
  // C * 9/5 + 32 = F (9/5)=1.8
  let far = Number(((temp * 1.8) + 32).toFixed(1));
  return far;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
