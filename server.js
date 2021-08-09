const express = require("express");

const path = require("path");

const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();


app.use(cors());

// body parser
app.use(bodyParser.json());

// ***** importing routess ****
const user = require("./routes/user");


// ***** using user routes ***// 
app.use("/api/user", user);

// *** to run api in port 4000 ****//
app.listen(4000);

