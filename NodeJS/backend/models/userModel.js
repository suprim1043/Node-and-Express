const { mongo } = require("mongoose");

const mongoose = requre("mongoose");
const userSchema = mongoose.Schema({
    username : {
        type: String,
        required : [true, "Username is required"],
    },
    email : {
        type : String,
        required : [true, "Email for user is required "],
        unique : [true, "This email has already been used"]
    }, 
    password: {
        type : String,
        required : [true, "Password is required"]
    },  
},
{
        timestmps : true,
});

module.exports = mongoose.model("UserSchema", userSchema);