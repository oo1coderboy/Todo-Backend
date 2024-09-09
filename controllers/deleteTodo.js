// import the model

const Todo = require('../models/Todo') ;

// define the route handler

exports.deleteTodo = async (req,res)=>{
    try {
        const {id} = req.params ;
        // const {title,description} = req.body ;

        await Todo.findByIdAndDelete(id);

        // response 
        res.status(200)
        .json({
            success:true,
            message:`Data deleted Successfully for ${id}!!`,
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