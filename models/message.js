const mongoose = require("mongoose")
const { DateTime } = require("luxon")

const Schema = mongoose.Schema

const MessageSchema = new Schema({
    title: {type: String, requireD: true, maxLength: 100},
    content: {type: String, required: true, maxlength: 1000},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    post_date: {type: Date}
})

MessageSchema.virtual('post_date_formatted').get(function() {
    return this.post_date ? DateTime.fromJSDate(this.post_date).toLocaleString(DateTime.DATETIME_MED) : ''
})

module.exports = mongoose.model('Messsage', MessageSchema)