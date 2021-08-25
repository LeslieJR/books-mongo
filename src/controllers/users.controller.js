const models = require('../models')

//to register one new user
const register = async (req, res) =>{
    const { username, password} = req.body;
    if(!username || !password) {
        res.send('required fields missing');
    }
    
    const newUser = new models.user({
        username,
        password
    })
 
    //to save this object, using mongoose: 
    await newUser.save(); 
    
    res.json(newUser)
}

//for login we need to check the user is registered
const login = async (req, res) =>{
    const {username, password} = req.params;
    //use try and catch 
    try{
      //findOne
      const user = await models.user.findOne({username});
      return res.json({user})  
    }catch{
        return res.json({message:"There was an error."})
    }

}

const all = async (req, res) =>{
    const users = await models.user.find();
    res.json({users});
}




module.exports = {
    register,
    all,
    login,
 
}