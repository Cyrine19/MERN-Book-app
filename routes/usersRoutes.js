const express = require ('express');
const User = require ('../models/User.js');
const asyncHandler = require('express-async-handler');
const authMiddleware = require ('../middlewares/authMiddleware.js');
const generateToken = require('../Utils/generateToken.js');
const usersRoute = express.Router() ;


//Register
usersRoute.post (
    '/register',
    asyncHandler(async(req, res) => {
        const { name, email, password } = req.body;
        const userExists = await User.findOne ({ email: email });

        if (userExists) {
            throw new Error ('User Exist') ;
        }
        const userCreated = await User.create ({ email, name, password});
        res.json({
            _id : userCreated._id ,
            name  : userCreated.name ,
            password:userCreated.password,
            email: userCreated.password,
            token: generateToken(userCreated._id),
        });
    })
    );

//Login
usersRoute.post('/login',
    asyncHandler( async (req, res) => {
        const { email, password } = req.body;

        const user = await User.findOne( { email });

        if (user && await user.isPasswordMatch (password)) {
           res.status(200);

           res.json({
            _id : user._id ,
            name  : user.name ,
            password: user.password,
            email: user.password,
            token: generateToken(user._id),
           });
        } else {
            res.status (401);
            throw new Error('Invalid credentials')
        }
    })
);  //Send a response to the client


//update user 
usersRoute.put('/update', authMiddleware,(req, res) =>{
    res.send('Update Route') ;
});

//Delete user 
usersRoute.delete ('/:id', (req, res) => {
    res.send('Delete route');
});
//fetch Users
usersRoute.get('/', authMiddleware,(req ,res)=>{
    console.log(req.headers);
    res.send(req.user);
});
module.exports = usersRoute ;