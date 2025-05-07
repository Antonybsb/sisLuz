const Controller = require('./Controller.js');
const MembroServices = require('../services/MembroServices.js');

const membroServices = new MembroServices();

class MembroController extends Controller {
  constructor() {
    super(membroServices);
  }
}

module.exports = MembroController;
