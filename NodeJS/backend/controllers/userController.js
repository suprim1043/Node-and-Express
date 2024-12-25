const asyncHandler = require("express-async-handler");
const user = require("../models/contactModel");
const bcrypt = require("bcrypt");


//@desc Register a user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async(req, res) =>{
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are required");
    }
    const userAvailable = await user.findOne({email});
    if(userAvailable) {
        res.status(400);
        throw new Error("User with this email already exists");
    }


    //bcrypt library is required to hash passwords, this is raw password that we are getting right now and it needs to be hashed before being put on database

    const hashed = await bcrypt.hash(password, 10);
    console.log("hashed password", hashed);

    res.json({message: "Register the user"});
});


//@desc Login a user
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async(req, res) =>{
    res.json({message: "Login the user"});
});

//@desc  User Info
//@route POST /api/users/current
//@access private

const currentUser = asyncHandler(async(req, res) =>{
    res.json({message: "Get the user info"});
});



module.exports = {registerUser,loginUser, currentUser}