const express = require('express')
const router = express.Router()
const Message = require('../models/message')

const message_controller = require('../controllers/messageController')
const user_controller = require('../controllers/userController')

//GET home page

router.get('/', message_controller.index)

router.get('/login', user_controller.log_in_get)
router.post('/login', message_controller.index)

router.get('/signup', user_controller.sign_up_get)
router.post('/signup', message_controller.index)

router.get('/new-message', message_controller.index)
router.post('/new-message', message_controller.index)

module.exports = router