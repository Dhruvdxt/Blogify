const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    domain: {
        type: String,
        enum: ["ON_BLOG", "ON_COMMENT"],
        required: true
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blog",
        default: null
    },
    commentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
        default: null
    }
},
{timestamps: true}
);

const likeModel = mongoose.model('like' , likeSchema);

module.exports = likeModel;