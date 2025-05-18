const Controller = require('./Controller.js');
const EnderecoServices = require('../services/EnderecoServices.js');

const enderecoServices = new EnderecoServices();

class EnderecoController extends Controller {
  constructor() {
    super(enderecoServices);
  }
}

module.exports = EnderecoController;
