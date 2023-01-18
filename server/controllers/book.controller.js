const book = {}

const Book = require('../models/Book')
const Usuario = require('../models/Book')

book.getBooks = async(req, res)=>{
    const books = await Book.find()
    res.json(books)
}
book.createBook = async(req, res)=>{
    const {title,author,price} = req.body;
    const newBook = new Book({
        title: title,
        author: author,
        price: price
    })
    await book.save();
    res.json({message: 'book added succesfully'})
}
book.getBook = async(req, res)=>{
    const book = await Book.findById(req.params.id)
    res.json(book)
}
book.deleteBook = async(req, res)=>{
    await Book.findByIdAndDelete(req.params.id)
    res.json({message: 'book deleted'})
}
book.updateBook = async(req, res)=>{
    const {title,author,price} = req.body;
    await Book.findByIdAndUpdate(req.params.id,{
        title,
        author,
        price
    })
    res.json({message:'book updated'})
}

module.exports = book;
