const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminControllers.js')

router.post('/adminLogin', adminController.adminLogin)

module.exports = router

