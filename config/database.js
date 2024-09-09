const mongoose = require('mongoose') ;

require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("Database Connected Successfully!!!"))
    .catch((err)=>{
        console.log("Database connection issues!!!");
        console.log(err.message);
        process.exit(1);
    })
}

module.exports = dbConnect ;