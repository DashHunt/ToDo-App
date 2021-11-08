const express = require('express');
const router = express.Router();

const controllerDisplay = require('../Controller/controllerDisplay')
const removeData = require('../Controller/controllerDelete')

//App router
router.get('/', controllerDisplay.homepage);
router.get('/delete', removeData)

module.exports = router;