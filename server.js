const express = require("express");

const path = require("path");

const cors = require("cors");

const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const app = express();


app.use(cors());

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// ***** importing routess ****
const user = require("./routes/user");


// ***** using user routes ***// 
app.use("/api/user", user);

// *** to run api in port 4000 ****//

const PORT=process.env.PORT || 4000

if (process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"))
}

app.listen(PORT);

