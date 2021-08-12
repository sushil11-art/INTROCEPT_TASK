const devLogger=require("./dev-logger");
const prodLogger = require("./prod-logger");

let logger=null;

if (process.env.NODE_ENV=="production"){
    logger=prodLogger();
}
else{
    logger=devLogger();
}


module.exports=logger;