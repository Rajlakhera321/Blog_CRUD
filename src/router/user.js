const { userController } = require("../controller");
const express = require("express");
const router = express.Router();
const {verify} = require("../middleware");
const { isSuperAdmin } = require("../middleware/authorization");

router.post("/create", userController.addUser);

router.post("/login", userController.login);

router.get("/logout",verify.verifyToken, userController.logout);

router.post("/addAdmin", verify.verifyToken, isSuperAdmin,userController.addAdmin);

module.exports = router;
