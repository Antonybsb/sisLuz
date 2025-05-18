const Controller = require('./Controller.js');
const CursoBiblicoServices = require('../services/CursoBiblicoServices.js');

const cursoBiblicoServices = new CursoBiblicoServices();

class CursoBiblicoController extends Controller {
  constructor() {
    super(cursoBiblicoServices);
  }
}

module.exports = CursoBiblicoController;
