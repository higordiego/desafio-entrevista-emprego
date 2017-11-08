const mongoose = require('mongoose')
const Schema = mongoose.Schema

const post = new Schema({
    id: {type: Number, requried: true},
    title: {type: String, required: true},
    body: {type: String, required: true}
})

module.exports = mongoose.model('Post', post)
