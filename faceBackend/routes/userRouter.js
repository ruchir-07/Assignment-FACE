const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
router.post('/register', userCtrl.register)

router.post('/home', userCtrl.login)

router.get('/logout', userCtrl.logout)
module.exports = router