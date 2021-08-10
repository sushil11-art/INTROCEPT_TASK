const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { addInfo, getInfo, getInfoEmail } = require("../controllers/userController");


// *** route to post user information *****//

router.post(
  "/add-info",
  [
    body("name", "Please enter name a name of at least 7 character").not().isEmpty().isLength({min:7}),
    body("email", "Please enter a valid email").isEmail(),
    body("address", "Please enter a address").not().isEmpty(),
    body("nationality", "Please enter your nationality").not().isEmpty(),
    body("dob", "Please enter your date of birth").not().isEmpty(),
    body("education", "Mention your education with comma separted format")
      .not()
      .isEmpty(),
  ],
  addInfo
);


// *** route to get all user information *****//
router.get("/get-info",getInfo)


// *** route to get user information with email *****//

router.get("/get-info/:email",getInfoEmail)

module.exports = router;
