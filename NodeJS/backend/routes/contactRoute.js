const express = require("express");

const router = express.Router();

const {getContact, createContact, upadteContact, deleteContact} = require("./../controllers/contactController");

router.route("/").get(getContact); //using method defined in controllers

router.route("/").post(createContact);

router.route("/:id").put(upadteContact);

router.route("/:id").delete(deleteContact);
 



module.exports = router;