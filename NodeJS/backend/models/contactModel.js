const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "This field is mandatory"]
    }, 
    email: { 
        type: String,
        required: [true, "This field is mandatory"]
    }, 
    phone: {
        type: String,
        required: [true, "This field is mandatory"]
    },
}, 
    {
    
    timestamps: true,
    
});

module.exports = mongoose.model("Contact", contactSchema);