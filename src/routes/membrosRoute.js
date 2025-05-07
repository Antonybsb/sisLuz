const { Router } = require('express');
const MembroController = require('../controllers/MembroController');

const membroController = new MembroController();

const router = Router();

router.get('/membros', (req, res) => membroController.pegaTodos(req, res));
router.put('/membros/:id', (req, res) => membroController.atualiza(req, res));

module.exports = router;
