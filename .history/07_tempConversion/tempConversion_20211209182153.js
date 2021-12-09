const ftoc = function(fah) {
  if(typeof fah !== `number`)
    return `ERROR`;
  const cel = Math.round(((fah - 32) * 5 / 9) * 10) / 10;
  return cel;
};

const ctof = function(cel) {
  if(typeof cel !== `number`)
    return `ERROR`;
  const fah = Math.round((cel * 9 / 5 + 32) * 10) / 10;
  return fah;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
