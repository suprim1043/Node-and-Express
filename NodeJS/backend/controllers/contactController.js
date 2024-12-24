//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContact = (req, res) => {
    res.json({message : "GETTING ALL CONTACTS"});
};

//@desc Create contacts
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
    res.json({message : "Creating ALL CONTACTS"});
};



//@desc Update contacts
//@route POST /api/contacts/:id
//@access public

const upadteContact = (req, res) => {
    res.json({message : `Updaing contact with id ${req.params.id}`});
};


//@desc Update contacts
//@route POST /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
    res.json({message : `Deleting contact with id ${req.params.id}`});
};




module.exports = {getContact, createContact, upadteContact, deleteContact};