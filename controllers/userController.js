const User = require('../models/user')
const asyncHandler = require('express-async-handler')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const user = require('../models/user')


//Display user log in form
exports.log_in_get = (req, res) => {
    res.render('login', {title: 'Log In', user: res.locals.currentUser})
}

//Log in user
exports.log_in_post = passport.authenticate('local', {
    successRedirect:'/',
    failureRedirect:'/log-in',
    failureFlash: true
})

//Log out user
exports.log_out = () => {
    req.logout()
    res.redirect('/')
}

//Display user signup form
exports.sign_up_get = (req, res) => {
    res.render('signup', {title: 'Sign Up', user: res.locals.currentUser, errors:[], success:[]})
}

//Create new user from sign up form
exports.sign_up_post = [
    body('username').trim().isLength({min:1}).escape().withMessage('Username can not be blank.'),
    body('password').trim().isLength({min:1}).escape().withMessage('Password can not be empty.'),
    
    asyncHandler(async (req, res, next) => {
        const isTaken = await User.find({username: req.body.username})
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            //There are errors. Re-render form with error message.
            res.render('signup', {errors: errors.array(), success:[], user: res.locals.currentUser})
            return;
        }else if(isTaken.length > 0) {
            //Username is taken
            res.render('signup', {errors:[{msg: 'username already taken'}], succes:[], user:res.locals.currentUser})
        }else {
            //Data from form is valid
            bcrypt.hash(req.body.password, 10, (error, hashedPassword) => {
                if(error) {
                    return next(error)
                }else {
                    const user = new User({
                        username: req.body.username,
                        password: hashedPassword,
                    })
                    // .then(
                    //     res.render('signup', {errors: [], succes:[{msg: 'You signed up successfully.'}], user: res.locals.currentUser})
                    // ).catch(error => {
                    //     if(error)  {
                    //         return next(error) 
                    //     }
                    // })
                    user.save().then(() => {
                        res.redirect('/')
                    }).catch((error) => {
                        console.log(error)
                    })
                }
            })
            // await user.save()
            // res.redirect('/')
        }
    })
]