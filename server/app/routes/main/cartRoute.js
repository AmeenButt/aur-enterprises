const express = require('express');
const router = express.Router();
const controller = require('../../controller/main/cartController')

router.post('/add', controller.add)
router.put('/update', controller.update)
router.get('/get', controller.get)
router.delete('/delete', controller.delete)
router.delete('/delete/all', controller.deleteAll)
module.exports = router