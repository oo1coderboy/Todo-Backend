const express = require('express') ;
const app = express();


// load config from .env
require("dotenv").config() ;
const PORT = process.env.PORT || 5000;

// middleware to parse json request body
app.use(express.json()) ;

// import routes for TODO API
const todoRoutes = require('./routes/todos');

// mount the todo API route
app.use("/api/v1",todoRoutes);


// default Route

app.get('/',(req,res)=>{
    res.send(`<h4>Home Page of our Todo App.</h4>`) ;
})
// start server
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
    
})

// CONNECT TO THE DATABASE
const dbConnect = require('./config/database') ;
dbConnect();
