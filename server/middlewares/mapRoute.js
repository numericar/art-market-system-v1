const express = require("express");

const router = express.Router();

router.use("/v1/auths", require("../routes/auths.route"));

module.exports = router;