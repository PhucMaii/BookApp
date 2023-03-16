const AuthorModel = require('../models/Author');

const createAuthor = async (req, res) => {
    const incomingData = req.body;

    const newAuthor = new AuthorModel({
        name: incomingData.name,
        email: incomingData.email,
        contact: incomingData.contact
    })

    try {
        const response = await newAuthor.save();
        res.status(201).json({
            message: "Author Successfully created",
            data: response
        })
    } catch(error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }

}

const getAllAuthor = async (req, res) => {
    try {
        const authorData = await AuthorModel.find();
        return res.status(200).json({
            message: "Successfully Fetched the Authors",
            data: authorData
        })
    } catch(error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}


const getAuthorByID = async (req, res) => {
    const id = req.params.id;

    try{
        const authorData = await AuthorModel.findById(id);

        if(authorData) {
            return res.status(200).json({
                message: "Successfully Fetched the Authors",
                data: authorData
            })
        }
        else {
            return res.status(404).json({
                message: "Author not found",
            })
        }
        
    } catch(error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const updateAuthor = async (req, res) => {
    const incomingData = req.body;
    const id = req.params.id;

    try {
        const authorData = await AuthorModel.findByIdAndUpdate(id, incomingData);
        return res.status(200).json({
            message: "Successfully Updated the Authors",
            data: incomingData
        })
    } catch(error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

const deleteAuthor = async (req, res) => {
    const id = req.params.id;
    try {
        await AuthorModel.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Successfully Deleted the Authors",
        })
    } catch(error) {
        res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

module.exports = {
    createAuthor,
    getAllAuthor,
    getAuthorByID,
    updateAuthor,
    deleteAuthor
}