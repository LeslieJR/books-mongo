const {Router} = require('express')
const router = Router();

const controllers = require('../controllers')

//to create a book
router.post('/create' , controllers.booksController.create)

//to get all books
router.get('/get/all', controllers.booksController.all)

//to get one book
router.get('/get/:id', controllers.booksController.getOne)

//to update one book
router.put('/update/:id', controllers.booksController.updateOne)

//to delete one book
router.delete('/delete/:id', controllers.booksController.deleteOne)

module.exports = router;