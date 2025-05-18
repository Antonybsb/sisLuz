const Controller = require('./Controller.js');
const BatismoServices = require('../services/BatismoServices.js');

const batismoServices = new BatismoServices();

class BatismoController extends Controller {
  constructor() {
    super(batismoServices);
  }
}

module.exports = BatismoController;
