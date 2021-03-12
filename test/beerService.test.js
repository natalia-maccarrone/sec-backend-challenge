const { beersService } = require('../services');

describe('Beers Service', () => {
  it('Should return one array of two items if a valid sum is found', () => {
    const result = beersService([10, 20], 30);
    expect(result).toEqual(expect.arrayContaining([0, 1]));
  });

  it('Should return an empty array if no valid sum is found', () => {
    const result = beersService([10, 20], 35);
    expect(result).toEqual(expect.arrayContaining([]));
  });

  it('Should throw error if it is not passed the correct parameters', () => {
    expect(() => {
      beersService();
    }).toThrow();

    expect(() => {
      beersService([1, 2]);
    }).toThrow();

    expect(() => {
      beersService(1, 3);
    }).toThrow();
  });
});
