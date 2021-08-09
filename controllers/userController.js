const { validationResult } = require("express-validator");

const csvwriter=require("csv-writer")
var createCsvWriter = csvwriter.createObjectCsvWriter

// Passing the column names intp the module
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

        const results = [
  {
    name: 'Sravan Kumar Gottumukkala',
    email: 'phuyalsushil1189@gmail.com',
    address:'Kathmandu',
    nationality:'Neplai',
    dob:'2055/02/04',
    education:'Bachelor'
  },
   
];
// Writerecords function to add records
csvWriter
  .writeRecords(results)
  .then(()=> console.log('Data uploaded into csv successfully'));
     // const {name,gender,email,address,nationality,dob,education}=req.body;

    }
    catch(err){

        console.log(err)

    }

}


/* 


    Name
    Gender
    Phone
    Email
    Address
    Nationality
    Date of birth
    Education background
    Preferred mode of contact (select one from email, phone, none)


*/