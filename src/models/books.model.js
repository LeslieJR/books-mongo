const { Schema, model } = require('mongoose');
 
//schema let us define the attributes, in this case author, description and punctuation
const BookSchema = new Schema({
    //data type of the attributes
    author: String,
    description: String,
    punctuation: Number
});
 
//the model = (name, schema) -> collection
//'Book' is how it will be stored in the db and how we will reference it
const BookModel = model('book', BookSchema);
module.exports = BookModel;