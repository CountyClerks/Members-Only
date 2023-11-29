const User = require('../models/user')
const Message = require('../models/message')
const asyncHandler = require('express-async-handler')
const { body, bodyValidation } = require('express-validator')

exports.index = asyncHandler(async (req, res, next) => {
    // const messageCount = await Message.countDocuments({}).exec()
    // const messageCount = await Message.find().sort({post_date: 1}).exec()
    
    res.render('index', {
        title: "Member's Only Board",
        // message_count: messageCount,
    })
})


exports.message_create_get = (req, res, next) => {

}

exports.message_create_post = (req, res, next) => {
    
}

exports.member_get = (req, res, next) => {
    res.render('member', {user: res.locals.currentUser, errMessages:[]})
}

exports.member_post = (req, res, next) => {

    if(req.body.password !== process.env.MEMBERSHIP_CODE) {
        res.render('member', {errMessages: ['wrong password'], user: res.locals.currentUser})
    } else {
        User.findByIdAndUpdate(req.user._id, {$set:{"member": true}}, {}, function(err, result) {
            if(err) return next(err)
            res.redirect('/')
        })
    }

}