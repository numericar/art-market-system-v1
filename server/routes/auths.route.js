const express = require("express");
const ResponseDto = require("../dtos/ResponseDto");
const RESPONSE_MESSAGE_CONFIGS = require("../configs/responseMessage.config");
const RESPONSE_STATUS_CONFIGS = require("../configs/responseStatus.config");

const router = express.Router();

router.get("/health-check", (req, res, next) => {
    const response = new ResponseDto(true, RESPONSE_MESSAGE_CONFIGS.SUCCESSFUL, null);

    res.status(RESPONSE_STATUS_CONFIGS.OK).json(response);
});

module.exports = router;