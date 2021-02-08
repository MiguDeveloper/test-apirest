const { Router } = require('express');
const { getPlantillaIndex } = require('../controllers/plantillas');

const router = Router();

router.get('/', [], getPlantillaIndex);

module.exports = router;
