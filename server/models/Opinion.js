const mongoose = require('mongoose');

const opinionSchema = new mongoose.Schema({
    movieId: Number,
    nickname: String,
    rating: Number,
    comment: String,
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Opinion',opinionSchema)