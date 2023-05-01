const {Schema, model} = require("mongoose");

const userModel = new Schema({
    name: {
        type: Schema.Types.String
    },
    email: {
        type: Schema.Types.String
    },
    password: {
        type: Schema.Types.String
    }
},{timestamps: true});

module.exports = model("user", userModel)