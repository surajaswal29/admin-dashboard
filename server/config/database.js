const mongoose = require('mongoose');

// opening connection to mongo DB
const connectDB = ()=>{
    mongoose.connect(process.env.DB_URL,{
        dbName:"employee_dashboard",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data)=>{
        console.log(`Mongo DB is connected successfully with ${data.connection.host}`);
    }).catch((error)=>{
        console.log(`Error Occurred While Connecting with Mongo DB => ${error}`);
    })
}

module.exports = connectDB;