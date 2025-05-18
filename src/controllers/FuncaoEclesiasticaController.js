const Controller = require('./Controller.js');
const FuncaoEclesiasticaServices = require('../services/FuncaoEclesiasticaServices.js');

const funcaoEclesiasticaServices = new FuncaoEclesiasticaServices();

class FuncaoEclesiasticaController extends Controller {
  constructor() {
    super(funcaoEclesiasticaServices);
  }
}

module.exports = FuncaoEclesiasticaController;
