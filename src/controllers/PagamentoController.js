const Controller = require('./Controller.js');
const PagamentoServices = require('../services/PagamentoServices.js');

const pagamentoServices = new PagamentoServices();

class PagamentoController extends Controller {
  constructor() {
    super(pagamentoServices);
  }
}

module.exports = PagamentoController;
