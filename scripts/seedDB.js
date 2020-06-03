// mongodb
const mongoose = require("mongoose");
const db = require("../models");

// need to connect database
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed =
{
    authors: ["Agatha Christie"],
    description: "And Then There Were None is the signature novel of Agatha Christie, the most popular work of the world's bestselling novelist. It is a masterpiece of mystery and suspense that has been a fixture in popular literature since it was originally published in 1939. First there were ten-a curious assortment of strangers summoned to a private island off the coast of Devon. Their host, an eccentric millionaire unknown to any of them, is nowhere to be found. The ten guests have precious little in common except that each has a deadly secret buried deep in their own past. And, unknown to them, each has been marked for murder. Alone on the island and trapped by foul weather, one by one the guests begin to fall prey to the hidden murderer among them. With themselves as the only suspects, only the dead are above suspicion.",
    image: "https://books.google.com/books/content?id=zr5NBldVA5UC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "https://books.google.com/books?id=zr5NBldVA5UC&dq=title:And+Then+There+Were+None&hl=&source=gbs_api",
    title: "And Then There Were None",
    isbn: "9780312330873"
}


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });