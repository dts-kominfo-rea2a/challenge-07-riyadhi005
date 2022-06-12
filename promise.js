const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) =>{
  let a = await promiseTheaterIXX();
  let b = await promiseTheaterVGC();
  let ab = a.concat(b);
  let totalEmosi = 0;
  ab.map((a) => a.hasil === emosi && (totalEmosi +=1));
  return totalEmosi;
};

module.exports = {
  promiseOutput,
};
