const Controller = require('./Controller.js');
const DizimoServices = require('../services/DizimoServices.js');

const dizimoServices = new DizimoServices();

class DizimoController extends Controller {
  constructor() {
    super(dizimoServices);
  }
}

module.exports = DizimoController;
