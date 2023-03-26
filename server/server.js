const app = require('./app');
// import dotenv
const dotenv = require("dotenv");
//import connectDB() from database config file
const connectDB = require('./config/database');

// dotenv config
dotenv.config({path:"./config/config.env"});

// connecting to database
connectDB();

// Connecting to server
app.listen(process.env.PORT,()=>{
    console.log(`server is connected to port ${process.env.PORT}`);
})


