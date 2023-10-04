import User from './../models/user'

const bcrypot = require('bcrypt')
const passport = require('passport')
const session = require('express-session')
const LocalStrategy = require('passport-local').Strategy

passport.use(
    new LocalStrategy(async( username, passport, done) => {
        try {
            const user = await User.findOne({ username: username })
            if (!user) {
                return done(null, false, { message: 'Incorrect username.'})
            }
            bcrypt.compare(passport, User.password, (err, res) => {
                if (res) {
                    return done(null, user)
                } else {
                    return done(null, false, { message: 'Incorrect password.'})
                }
            })
        } catch(error) {
            return done(error)
        }
    })
)

passport.serializeUser(function(user, done) {
    done(null, user.id)
})

passport.deserializeUser(async function(id, done) {
    try {
        const user = await User.findById(id)
        done(null, user)
    } catch(error) {
        done(error)
    }
})


//CHANGE PROJECT TO SERVER FOLDER ONLY, NEXT PROJECT IN ODIN SHOWS HOW TO DO API WORK