const {Schema, model} = require("mongoose");

const blogModel = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    title: {
        type: Schema.Types.String
    },
    content: {
        type: Schema.Types.String
    }
},{timestamps: true});

module.exports = model("blog", blogModel)