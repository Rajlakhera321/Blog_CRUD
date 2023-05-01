const { userController } = require("../controller");
const express = require("express");
const router = express.Router();
const {verify} = require("../middleware")

router.post("/create", userController.addUser);

router.post("/login", userController.login);

router.get("/logout",verify.verifyToken, userController.logout);

module.exports = router;
