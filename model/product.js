const mongoose = require('mongoose')

const {Schema} = mongoose

const postSchema = new Schema({
    photo: {type: String, default: "assets/profile-pictures/1.jpeg"},
    username: {type: String, default: "Aadi Yadav"},
    time: { type: String, default: "Just now"},
    caption: String,
    post: {type: String},
    likes: {type: Number, default: 0},
    comments: {type: Number, default: 0}
})

exports.Post = mongoose.model('Post', postSchema) 