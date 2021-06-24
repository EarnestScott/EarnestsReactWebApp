const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    }
});

const Comments = mongoose.model('Comment', commentSchema);
module.exports = Comments;