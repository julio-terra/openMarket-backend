const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Router = express.Router();


Router.post('/register', async (req, res) =>{
    try{
        const user = await User.findOne({email: req.body.email});
        if(user){
            res.json({error: true, message: 'this user already exists'});
        }else{
            const newUser = new User(req.body);
            await newUser.save();
            res.json({ user: newUser });
        }
    }
    catch(err){
        res.json({error: true, message: err});
    };
});
Router.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if(validPassword){
        const accessToken = jwt.sign({ user_id: user.id },
        "mysecret",
        {expiresIn: '24h'}
        );
        res.json({ user, accessToken })
      }
      else{
        res.json({error: true, message: "invalid email or password"})
      }
    }else{
        res.json({error: true, message: "invalid email or password"})
    }
});
Router.get('/:id', async(req, res) =>{
    try{
        const user = await User.findById(req.params.id);
        res.json({ user });
    }
    catch(err){
        res.json({error: true, message: err})
    };
});

module.exports = Router;