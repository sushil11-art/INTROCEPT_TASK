const express = require("express");

const path = require("path");

const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();


app.use(cors());

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// ***** importing routess ****
const user = require("./routes/user");


// ***** using user routes ***// 
app.use("/api/user", user);



console.log("api is running on port 4000")
app.listen(4000);

