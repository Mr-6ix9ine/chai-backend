class ApiResponse {
    constructor(statusCode,data,message = "success"){
        this.statuScode = statuScode
        this.data = data
        this.message = message
        this.success = statusCode < 400;
    }
}