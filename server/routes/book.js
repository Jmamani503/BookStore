const {Router} = require('express')

const router = Router()

const { createBook, getBooks,getBook, deleteBook,updateBook} = require('../controllers/book.controller')

router.route('/')
    .get(getBooks)
    .post(createBook)

router.route('/:id')
    .get(getBook)
    .delete(deleteBook)
    .put(updateBook)
    
module.exports = router;    