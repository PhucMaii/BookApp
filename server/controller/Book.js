const BookModel = require('../models/Book');

const createBook = async (req, res) => {
    const incomingData = req.body;
    console.log(incomingData, "INCOMING DATA")
    const newBook = new BookModel({
        title: incomingData.title,
        description: incomingData.description,
        author: incomingData.author
    })

    try {
        const response = await newBook.save();
        res.status(201).json({
            message: "Book Created Successfully",
            data: response
        })

    }catch(error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const getAllBooks = async (req, res) => {
    try {
        const bookData = await BookModel.find();
        res.status(200).json({
            message: "All Books Fetched Successfully",
            data: bookData
        })
    } catch(error){
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const getBookByID = async (req,res) => {
    const id = req.params.id;

    try {
        const bookData = await BookModel.findById(id);
        if (bookData) {
            res.status(200).json({
                message: "Book Fetched Successfully",
                data: bookData
            })
        }
        else{
            res.status(404).json({
                message: "Book not found"
            })
        }
        
    } catch(error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const updateBook = async (req, res) => {
    const id = req.params.id;
    const incomingData = req.body;

    try {
        const bookData = await BookModel.findByIdAndUpdate(id, incomingData);
        res.status(200).json({
            message: "Book Updated Successfully",
            data: bookData
        })
    }catch(error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const deleteBook = async (req, res) => {
    const id = req.params.id;
    
    try {
        const bookData = await BookModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "Book Deleted Successfully",
            data: bookData
        })
    } catch(error) {
        res.status(500).json({
            message: "There was an error",
            data: bookData
        })
    }
}

module.exports = {
    createBook,
    getAllBooks,
    getBookByID,
    updateBook,
    deleteBook
}