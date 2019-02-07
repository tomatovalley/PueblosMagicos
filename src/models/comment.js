const { Schema, model } = require('mongoose');
//const { ObjectId } = Schema;

const CommentSchema = new Schema ({
    //post_id: { ObjectId },
    email: { type: String },
    name: { type: String },
    content: { type: String },
    timestamp: { type: Date, default: Date.now }
})

module.exports = model('Comment', CommentSchema)
