const express = require("express");

const path = require("path");

const cors = require("cors");

const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

const logger = require("./logger");

logger.info("Applying cors middleware")

app.use(cors());

// body parser

logger.info("Applying parsing middleware")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// ***** importing routess ****


logger.info("Now importing user routes")

const user = require("./routes/user");

// ***** using user routes ***// 

logger.info("Allowing express app to use imported routes")
app.use("/api/user", user);

// *** to run api in port 4000 ****//

logger.info("Initializing port to run express app")

const PORT=process.env.PORT || 4000

if (process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"))
}

logger.info(`Now app will run on port ${PORT}`)

app.listen(PORT);

