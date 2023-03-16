const express = require('express');
const router = express.Router();
const AuthorController = require('../controller/Author');
// API's for AUTHOR ROUTE



// Create Author API
router.post('/', AuthorController.createAuthor);

// Get ALL Authors API
router.get('/', AuthorController.getAllAuthor);

// Updating an Author
router.put('/:id', AuthorController.updateAuthor);

// Get an Author based on ID
router.get('/:id', AuthorController.getAuthorByID);

//Delete Author
router.delete('/:id', AuthorController.deleteAuthor);

module.exports = router;