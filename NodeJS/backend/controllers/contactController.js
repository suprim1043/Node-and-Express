const asyncHandler = require("express-async-handler");

const Contact = require("../models/contactModel");



//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

//@desc Create contacts
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required");
    }

    const contact = await Contact.create(
        {
            name, email, phone
        }
    );
    res.json(contact);
});


//@desc Update contacts
//@route POST /api/contacts/:id
//@access public

const upadteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    console.log(contact)
    
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id,
        req.body,
        {new : true},

    );
    res.json(updatedContact);
});


//@desc Update contacts
//@route POST /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async(req, res) => {

    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.json(contact);
});

module.exports = {getContact, createContact, upadteContact, deleteContact};