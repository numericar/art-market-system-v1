class ResponseDto {
    constructor(status, message, data) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.responseDateTime = new Date()
    }
}

module.exports = ResponseDto;