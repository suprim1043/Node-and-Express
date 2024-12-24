const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5050;

const app = express();
app.use(express.json()); //parser for accepting body from client side
app.use("/api/contacts", require("./routes/contactRoute")); //used for routing
app.use(errorHandler); //errorhandling middleware from middleware/errorhandler.js


app.listen(port, () => {
    console.log(`server running on port ${port}`)
});