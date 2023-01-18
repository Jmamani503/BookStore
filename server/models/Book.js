const {Schema, model} = require('mongoose');

const book = new Schema({
    title: String,
    author: String,
    price: Number,
},{
    timestamps: true
})

module.exports = model('Book', book)