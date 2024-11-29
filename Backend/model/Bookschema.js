import mongoose from "mongoose";


const bookschema = mongoose.Schema({
    "name": String,
    "title": String,
    "price": Number,
    "category": String,
    "img": String,
});

// const Book = mongoose.models("Bookinfo",bookschema) || mongoose.model("bookinfo",bookschema);
const Book = mongoose.models.Bookinfo || mongoose.model("Bookinfo",bookschema);


export default Book