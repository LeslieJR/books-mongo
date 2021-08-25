const mongoose = require('mongoose');
const dbname = 'crud-books'
const options = {
   useNewUrlParser: true, 
   useUnifiedTopology: true
}
mongoose.connect('mongodb://localhost/'+dbname, options)
.then(()=>{
 console.log('the connection was successful') 
})
.catch((err)=>{
 console.log('there was an error ',err);
})