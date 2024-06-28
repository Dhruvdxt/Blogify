const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blog",
    },
    content: {
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'like'
    }]
},
{timestamps: true}
);

const commentModel = mongoose.model('comment' , commentSchema);

module.exports = commentModel;