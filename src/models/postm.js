const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId },
    autor: { type: String},
    content: { type: String },
    likes: { type: Number, default: 0},
    timestamp: { type: Date, default: Date.now }
});

/*postSchema.virtual('uniqueId')
    .get(function () {
        return this.filename.replace(path.extname(this.filename), '')
    });*/

module.exports = mongoose.model('Posts', postSchema);