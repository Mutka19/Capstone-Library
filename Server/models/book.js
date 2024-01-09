const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    avail: {
        type: Boolean,
        required: true,
        default: false
    },
    who: {
        type: String,
    },
    due: {
        type: String,
    }
}, { versionKey: false });

module.exports = mongoose.model('books', bookSchema);