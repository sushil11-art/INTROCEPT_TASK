const { validationResult } = require("express-validator");

const csvwriter = require("csv-writer");
var createCsvWriter = csvwriter.createObjectCsvWriter;
const csvdata = require("csv-parser");
const fs = require("fs");

// const file_path= require('path');

// path.exists('foo.txt', function(exists) {
//   if (exists) {
//     // do something
//   }
// });

// Passing the column names into the module
const csvWriter = createCsvWriter({
  // Output csv file name is info.csv
  path: "info.csv",
  header: [
    // Title of the columns (column_names)
    { id: "name", title: "NAME" },
    { id: "email", title: "EMAIL" },
    { id: "address", title: "ADDRESS" },
    { id: "nationality", title: "NATIONALITY" },
    { id: "dob", title: "DATE OF BIRTH" },
    { id: "education", title: "EDUCATION" },
  ],
});

exports.addInfo = async (req, res, body) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, address, nationality, dob, education } = req.body;
  if (fs.existsSync("info.csv")) {
        const results =await readFile();
        const findIndex=await results.findIndex(u=>u.EMAIL==email.toString())
        console.log(findIndex)
        if (findIndex>=0){
        return res
        .status(400)
        .json({ errors: [{ msg: " User with that email already exists" }] });
        }
  }
  //   console.log(results);
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



async function readFile(){
    const results = [];
    return new Promise((resolve, reject) => {
      fs.createReadStream("info.csv")
        .pipe(csvdata())
        .on("data", (data) => results.push(data))
        .on("end", () => {
          console.log("success");
          resolve(results);
        }).on("error",reject);
    });
}