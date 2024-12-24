const {constants} = require("../constants");

const errorHandler = (err, req,res, next) =>{
    const statusCode = res.statusCode ? res.statusCode : 500; //if no status code, 500 is sent
    switch (statusCode){
        case constants.NOT_FOUND: //this comes from constats file where all of tthe error code are mentioned
            res.json({title : "Not Found" ,message : err.message, stackTrace : err.stack });
        break;
        case constants.VALIDATION_ERROR:
            res.json({title : "Validation Failed" ,message : err.message, stackTrace : err.stack });
        case constants.UNAUTHORIZED:
            res.json({title : "Unauthorized" ,message : err.message, stackTrace : err.stack });
        case constants.FORBIDDEN:
            res.json({title : "Forbidden" ,message : err.message, stackTrace : err.stack });
        case constants.SERVER_ERROR:
            res.json({title : "Server Error" ,message : err.message, stackTrace : err.stack });
        default:
            console.log("No Error, Everything is fine");
            break;

    }
    
    
};

module.exports = errorHandler; //everything should be exported to be used in other files 