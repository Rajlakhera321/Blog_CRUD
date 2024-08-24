const { Schema, model } = require("mongoose");

const postModel = new Schema({
    author: {
        type: Schema.Types.String
    },
    title: {
        type: Schema.Types.String
    },
    content: {
        type: Schema.Types.String
    }
}, { timestamps: true });

module.exports = model("post", postModel)