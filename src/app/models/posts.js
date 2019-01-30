const mongoose = require('mongoose');

const postSchema = new postSchema({
    userid:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    like: {type: Number, default: 0},
  });

module.exports = mongoose.model('Posts', postSchema);

