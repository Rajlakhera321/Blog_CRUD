const express = require("express");
const router = express.Router();
const {verify} = require("../middleware")

router.use("/user", require("./user"))

router.use("/blog",verify.verifyToken, require("./blog"))

module.exports = router
