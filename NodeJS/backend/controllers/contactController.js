//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContact = async (req, res) => {
    res.json({message : "GETTING ALL CONTACTS"});
};

//@desc Create contacts
//@route POST /api/contacts
//@access public

const createContact = async (req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required");
    }
    res.json({message : "Creating ALL CONTACTS"});
};



//@desc Update contacts
//@route POST /api/contacts/:id
//@access public

const upadteContact =async(req, res) => {
    res.json({message : `Updaing contact with id ${req.params.id}`});
};


//@desc Update contacts
//@route POST /api/contacts/:id
//@access public

const deleteContact = async(req, res) => {
    res.json({message : `Deleting contact with id ${req.params.id}`});
};




module.exports = {getContact, createContact, upadteContact, deleteContact};