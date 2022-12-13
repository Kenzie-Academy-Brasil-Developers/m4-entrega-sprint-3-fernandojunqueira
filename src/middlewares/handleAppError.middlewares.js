import AppError from "../errors";

const handleAppError = (error,req,res,next) => {
    if( error instanceof AppError){
       return res.status(error.statusCode).json(error.message)
    }
    console.log(error,'log de erro')
    return res.status(500).json({message:"Internal server error"})
}

export default handleAppError