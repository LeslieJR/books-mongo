const {Router} = require('express')
const router = Router();

const controllers = require('../controllers')

//to register one user (registration route)
router.post('/register' , controllers.usersController.register)

//to get all users
router.get('/get/all', controllers.usersController.all)

//to get one user (authentication route)
router.get('/auth', controllers.usersController.login)



module.exports = router;