const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5050;

const app = express();

app.use("/api/contacts", require("./routes/contactRoute"));

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});