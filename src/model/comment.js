const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    post_id: {
        type: Schema.Types.ObjectId,
        ref: "post"
    },
    author_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    content: {
        type: String
    }
}, { timestamps: true });

module.exports = model('comment', commentSchema);