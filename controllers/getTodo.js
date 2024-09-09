// import the model

const Todo = require('../models/Todo') ;

// define the route handler

exports.getTodo = async (req,res)=>{
    try {
        // fetch all todo items from database
        const todos = await Todo.find({}) ;

        // response 
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data fetched.",
        })
    } catch (error) {
        console.error(error);
        console.log(error) ;
        res.status(500)
        .json({
            success:false,
            data:"Internal Server Error.",
            message:error.message,
        })
    }
}

exports.getTodobyid = async (req,res)=>{
    try {
        // extract todo items basis on id
        const id = req.params.id ;
        const todo = await Todo.findById({_id:id}) ;

        // data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:`Todo ${id} data not found.`,
            })
        }
        // data for given id Found

        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched.`
        })

    } catch (error) {
        console.error(error);
        console.log(error) ;
        res.status(500)
        .json({
            success:false,
            data:"Internal Server Error.",
            message:error.message,
        })
    }
}