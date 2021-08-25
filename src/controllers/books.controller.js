const models = require('../models')

const create = async (req, res) =>{
    const { author, description, punctuation} = req.body;
    if(!author || !description || !punctuation) {
        res.send('required fields missing');
    }
    //initialize an object: newBook
    //we new to use models.book({})
    //where book is how we defined it before in books.models.js
    const newBook = new models.book({
        author,
        description,
        punctuation
    })
 
    //to save this object, using mongoose: 
    await newBook.save(); 
    
    res.json(newBook)
}

const all = async (req, res) =>{
    const books = await models.book.find();
    res.json({books});
}

const getOne = (req, res) =>{
    res.send('one book')
}

const updateOne = (req, res) =>{
    res.send('book updated')
}

const deleteOne = (req, res) =>{
    res.send('book deleted')
}

module.exports = {
    create,
    all,
    getOne,
    updateOne,
    deleteOne
}