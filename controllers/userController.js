const { validationResult } = require("express-validator");

const csvwriter=require("csv-writer")
var createCsvWriter = csvwriter.createObjectCsvWriter

// Passing the column names into the module
const csvWriter = createCsvWriter({
  
  // Output csv file name is info.csv
  path: 'info.csv',
  header: [
    // Title of the columns (column_names)
    {id: 'name', title: 'NAME'},
    {id: 'email', title: 'EMAIL'},
    {id: 'address', title:'ADDRESS'},
    {id: 'nationality', title: 'NATIONALITY'},
    {id:'dob',title:'DATE OF BIRTH'},
    {id: 'education', title: 'EDUCATION'},
  ]
});
  

exports.addInfo=async(req,res,body)=>{
    try{
        const{name,email,address,nationality,dob,education}=req.body
        console.log(name);
        const info=[{
            name:name,
            email:email,
            address:address,
            nationality:nationality,
            dob:dob,
            education:education
        }]
        console.log(info);
// Writerecords function to add records
csvWriter
  .writeRecords(info)
  .then(()=> console.log('Data uploaded into csv successfully'));
    }
    catch(err){
        console.log(err)

    }

}
