const { validationResult } = require("express-validator");

const csvwriter = require("csv-writer");
var createCsvWriter = csvwriter.createObjectCsvWriter;
const csvdata = require("csv-parser");
const fs = require("fs");

const csvWriter = createCsvWriter({
  path: "info.csv",
  header: [
    { id: "name", title: "NAME" },
    { id: "email", title: "EMAIL" },
    { id: "address", title: "ADDRESS" },
    { id: "nationality", title: "NATIONALITY" },
    { id: "dob", title: "DATE" },
    { id: "education", title: "EDUCATION" },
  ],
});

// **** adding user info ***//
exports.addInfo = async (req, res, body) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, address, nationality, dob, education } = req.body;
  if (fs.existsSync("info.csv")) {
    const results = await readFile();
    const findIndex = await results.findIndex(
      (u) => u.EMAIL == email.toString()
    );
    if (findIndex >= 0) {
      return res
        .status(400)
        .json({ errors: [{ msg: " User with that email already exists" }] });
    }
  }
  try {
    const info = [
      {
        name: name,
        email: email,
        address: address,
        nationality: nationality,
        dob: dob,
        education: education,
      },
    ];
    const information = await csvWriter.writeRecords(info);
    return res.json({ msg: "Information uploaded successfully" });
  } catch (err) {
    return res.status(500).send("Server error");
  }
};


// ****get info of all user ****//

exports.getInfo = async (req, res, next) => {
  try {
    if (fs.existsSync("info.csv")) {
      const users = await readFile();
      console.log(users);
      return res.json(users);    }
    const users = [];
    return res.json(users);
  } catch (err) {
    return res.status(500).send("Server error");
  }
};


// ***** get info of user with a particular email ***//
exports.getInfoEmail = async (req, res, next) => {
  try {
    let email=req.params.email
    console.log(email)
    if (fs.existsSync("info.csv")) {
      const data = await readFile();
      const user = await data.filter((u) => u.EMAIL == email.toString());
      return res.json(user);
    }
    const user = [];
    return res.json(user);
  } catch (err) {
    return res.status(500).send("Server error");
  }
};

// *** readFile funtion to read information from csv file  ****
async function readFile() {
  const results = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream("info.csv")
      .pipe(csvdata())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        console.log("success");
        resolve(results);
      })
      .on("error", reject);
  });
}
