const mongoose = require("mongoose")

const {Schema} = mongoose

const postSchema = new Schema({
    author: {type: String, required:true},
    title: {type:String, required:true}
})

const PostsModel = mongoose.model("Posts", postSchema)

module.exports = PostsModel