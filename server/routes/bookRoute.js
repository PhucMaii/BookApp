const express = require('express');
const router = express.Router();
const BookController = require('../controller/Book');

// API's for BOOK ROUTE


// Create book
router.post('/', BookController.createBook);
// Get all Book
router.get('/', BookController.getAllBooks);
// Get book by ID
router.get('/:id', BookController.getBookByID);
// Update Book
router.put('/:id', BookController.updateBook);
//DeleteBook
router.delete('/:id', BookController.deleteBook);


module.exports = router;