const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    _id: { type: String },
    title: { type: String },
    subtitle: { type: String },
    authors: { type: Array },
    description: { type: String },
    image: { type: String },
    link: { type: String },
    isbn: { type: String },
    published: { type: String },
    categories: { type: Array },
    pagecount: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;