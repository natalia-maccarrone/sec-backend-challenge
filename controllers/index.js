const services = require('./../services');

const beersController = (req, res) => {
  try {
    const { beers, target } = req.body;
    const index = services.beersService(beers, target);
    res.status(200).send(index);
  } catch (error) {
    console.log(error);
    res.status(error.statusCode).send({ Error: error.message });
  }
};

module.exports = { beersController };
