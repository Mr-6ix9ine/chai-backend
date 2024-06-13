class ApiError extends Error {
    constructor(
        statuScode,
        message="something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statuScode = statuScode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors


        if(stack ) {
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export  {ApiError}