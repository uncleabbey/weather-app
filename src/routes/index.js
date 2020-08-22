const { Router } = require('express');
const { homeCtrl, seacrchCtrl } = require('../controllers');

const router = Router();

router.post('/', seacrchCtrl);

router.get('/', homeCtrl);

module.exports = router;
