const Controller = require('./Controller.js');
const CategoriaTransacaoServices = require('../services/CategoriaTransacaoServices.js');

const categoriaTransacaoServices = new CategoriaTransacaoServices();

class CategoriaTransacaoController extends Controller {
  constructor() {
    super(categoriaTransacaoServices);
  }
}

module.exports = CategoriaTransacaoController;
