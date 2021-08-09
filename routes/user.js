const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { addInfo } = require("../controllers/userController");

router.post('/add-info',addInfo)


module.exports=router