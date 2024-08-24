const {Schema, model} = require("mongoose");

const userModel = new Schema({
    username: {
        type: Schema.Types.String
    },
    email: {
        type: Schema.Types.String
    },
    password: {
        type: Schema.Types.String
    },
    role: {
        type: Schema.Types.String,
        enum: ['superAdmin','admin','user'],
        default: 'user'
    }
},{timestamps: true});

module.exports = model("user", userModel)