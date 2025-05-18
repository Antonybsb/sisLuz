const Controller = require('./Controller.js');
const TransacaoFinanceiraServices = require('../services/TransacaoFinanceiraServices.js');

const transacaoFinanceiraServices = new TransacaoFinanceiraServices();

class TransacaoFinanceiraController extends Controller {
  constructor() {
    super(transacaoFinanceiraServices);
  }
}

module.exports = TransacaoFinanceiraController;
