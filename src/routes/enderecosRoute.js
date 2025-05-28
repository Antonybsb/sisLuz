const { Router } = require('express');
const EnderecosController = require('../controllers/EnderecoController.js');

const enderecosController = new EnderecosController();

const router = Router();

router.get('/enderecos', (req, res) => enderecosController.pegaTodos(req, res));
router.get('/enderecos/:id', (req, res) =>
  enderecosController.pegaUmRegistroPorId(req, res)
);
router.post('/enderecos', (req, res) =>
  enderecosController.criaRegistro(req, res)
);
router.put('/enderecos/:id', (req, res) =>
  enderecosController.atualizaRegistro(req, res)
);
router.delete('/enderecos/:id', (req, res) =>
  enderecosController.excluiRegistro(req, res)
);

module.exports = router;
