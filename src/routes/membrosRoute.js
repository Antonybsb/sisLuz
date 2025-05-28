const { Router } = require('express');
const MembroController = require('../controllers/MembroController.js');

const membroController = new MembroController();

const router = Router();

router.get('/membros', (req, res) => membroController.pegaTodos(req, res));
router.get('/membros/:id', (req, res) =>
  membroController.pegaUmRegistroPorId(req, res)
);
router.post('/membros', (req, res) => membroController.criaRegistro(req, res));
router.put('/membros/:id', (req, res) =>
  membroController.atualizaRegistro(req, res)
);
router.delete('/membros/:id', (req, res) =>
  membroController.excluiRegistro(req, res)
);

module.exports = router;
