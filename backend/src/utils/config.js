const {configDotenv} = require("dotenv");    // Import configDotenv
configDotenv();    //calling it    

const PORT = process.env.PORT || 3000; // get the port from env file
const MONGODB_URI = process.env.MONGODB_URI; // get the mongodb uri from env file
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS); // get the salt rounds from env file
const JWT_SECRET = process.env.JWT_SECRET; // get the jwt secret from env file  
module.exports = {
    PORT,
    MONGODB_URI,
    SALT_ROUNDS,
    JWT_SECRET
} // Export the PORT
