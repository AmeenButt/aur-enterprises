const express = require('express');
const router = express.Router();
const controller = require('../../controller/main/categoriesController')

router.post('/add', controller.add)
router.put('/update', controller.update)
router.get('/get', controller.get)
router.delete('/delete', controller.delete)
router.get('/search', controller.search)
module.exports = router