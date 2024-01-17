const router = require('express').Router();
const controller = require('../../controller/users/admin')
router.post('/create',controller.create)
router.post('/login',controller.login)

module.exports = router;