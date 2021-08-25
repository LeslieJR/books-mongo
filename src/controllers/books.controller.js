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

const getOne = async (req, res) =>{
    const {id} = req.params;
    //use try and catch 
    try{
      //findById
      const book = await models.book.findById(id);
      return res.json({book})  
    }catch{
        return res.json({message:"There was an error."})
    }

}

const updateOne = async (req, res) =>{
    const {id} = req.params;
    const {author, description, punctuation} = req.body;
    // to update one task -> updateOne({_id:id},{$set: {title, description}}) -> this does not return the updated object
    // to update and return an object: findOneAndUpdate({_id:id},{$set:{title, description}}, {new:true})
    const book = await models.book.findOneAndUpdate(
        {_id:id},
        {$set:{author, description, punctuation}},
        {new: true}
        )
    res.json({book})
}

const deleteOne = async (req, res) =>{
    const {id} = req.params;
    //to remove one task -> remove{_id: id} does not return the object // 
    //to return the object removed: findOneAndRemove({_id:id}) 
    const book = await models.book.findOneAndRemove({_id:id})
    res.json({book})
}

module.exports = {
    create,
    all,
    getOne,
    updateOne,
    deleteOne
}