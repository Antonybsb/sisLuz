const Controller = require('./Controller.js');
const MembroFuncaoServices = require('../services/MembroFuncaoServices.js');

const membroFuncaoServices = new MembroFuncaoServices();

class MembroFuncaoController extends Controller {
  constructor() {
    super(membroFuncaoServices);
  }
}

module.exports = MembroFuncaoController;
