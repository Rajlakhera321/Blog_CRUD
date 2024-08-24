const express = require("express");
const router = express.Router();
const {verify} = require("../middleware")

router.use("/user", require("./user"))

router.use("/post", require("./post"))

router.use("/comment",verify.verifyToken, require("./comment"))

module.exports = router
