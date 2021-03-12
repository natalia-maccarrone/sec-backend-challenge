const CustomError = require('../errors');

const beersService = (beers, target) => {
  if (!beers || !target) {
    throw new CustomError('Bad Request', 400);
  }

  let ibusIndexes = {};

  beers.forEach((ibu, index) => {
    ibusIndexes[ibu] = index;
  });

  for (let i = 0; i < beers.length; i++) {
    let currentDifference = target - beers[i];
    if (ibusIndexes[currentDifference] && ibusIndexes[currentDifference] != i) {
      return [i, ibusIndexes[currentDifference]];
    }
  }

  return [];
};

module.exports = { beersService };
