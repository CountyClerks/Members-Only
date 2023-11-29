const mongoose = require("mongoose")

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {type: String, required: true, maxlength: 30},
    password: {type: String, required: true},
    member_status: {type: Boolean},
    admin: {type: Boolean},
})

module.exports = mongoose.model('User', UserSchema)