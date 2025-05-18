const Controller = require('./Controller.js');
const MembroCursoServices = require('../services/MembroCursoServices.js');

const membroCursoServices = new MembroCursoServices();

class MembroCursoController extends Controller {
  constructor() {
    super(membroCursoServices);
  }
}

module.exports = MembroCursoController;
