const Controller = require('./Controller.js');
const OfertaServices = require('../services/OfertaServices.js');

const ofertaServices = new OfertaServices();

class OfertaController extends Controller {
  constructor() {
    super(ofertaServices);
  }
}

module.exports = OfertaController;
