const router = require('express').Router();
const controllers = require('./../controllers');

router.route('/findTwoBeers').post(controllers.beersController);

module.exports = router;
