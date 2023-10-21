const express = require('express')
const router = express.Router()
const Message = require('../models/message')

const message_controller = require('../controllers/messageController')
const user_controller = require('../controllers/userController')

//GET home page
router.get('/', message_controller.index)

router.get('/new-message',)
router.post('/new-message',)

//Auth Routes
router.get('/login', user_controller.log_in_get)
router.post('/login', user_controller.log_in_post)

router.get('/signup', user_controller.sign_up_get)
router.post('/signup', user_controller.sign_up_post)

module.exports = router