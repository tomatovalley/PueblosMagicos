const Posts = require('./postm');
const { Schema, model } = require('mongoose');
//const mongoose = require('mongoose');
//const ObjectId = mongoose.Schema.Types.ObjectId;;

const CommentSchema = new Schema ({
    post_id: { type: Schema.Types.ObjectId },
    name: { type: String },
    content: { type: String },
    timestamp: { type: Date, default: Date.now }
})

module.exports = model('Comment', CommentSchema)
