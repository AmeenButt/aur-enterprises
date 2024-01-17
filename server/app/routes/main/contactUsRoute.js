const router = require('express').Router();
const controller = require('../../controller/main/contactUsController')

router.post('/add', controller.add)
router.get('/get', controller.get)
router.delete('/delete', controller.delete)
router.put('/changeStatus', controller.changeStatus)

module.exports = router;