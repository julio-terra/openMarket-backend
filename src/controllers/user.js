const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (request, response) =>{
    try{
        const user = await User.findOne({email: request.body.email});
        if(user){
            response.json({error: true, message: 'this user already exists'});
        }else{
            const newUser = new User(request.body);
            await newUser.save();
            response.json({ user: newUser });
        }
    }
    catch(err){
        response.json({error: true, message: err});
    };
};
const login = async (request, response) => {
    const user = await User.findOne({ email: request.body.email });
    if (user) {
      const validPassword = await bcrypt.compare(request.body.password, user.password);
      if(validPassword){
        const accessToken = jwt.sign({ user_id: user.id },
        "mysecret",
        {expiresIn: '24h'}
        );
        response.json({ user, accessToken })
      }
      else{
        response.json({error: true, message: "invalid email or password"})
      }
    }else{
        response.json({error: true, message: "invalid email or password"})
    }
};
const getUser =  async(request, response) =>{
    try{
        const user = await User.findById(request.params.id);
        response.json({ user });
    }
    catch(err){
        response.json({error: true, message: err})
    };
};

module.exports = {
    register,
    login,
    getUser
};